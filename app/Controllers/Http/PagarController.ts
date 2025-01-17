import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Fornecedor from 'App/Models/Fornecedor'
import Pagar from 'App/Models/Pagar'
import Parcela from 'App/Models/PagarParcelado'
import { DateTime } from 'luxon'

export default class PagarController {
  public async index({ response, auth: { user } }: HttpContextContract) {
    await user?.load('cargo')
    if (!user?.cargo.aPagar.visualizar) {
      return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] })
    }
    try {
      await Fornecedor.query()
        .where((builder) => {
          if (user) {
            builder.where({ empresaId: user.empresaId })
          }
        })
        .has('pagar')
        .preload('pagar', (query) => query.preload('parcelas'))
        .then((clientes) => response.status(200).send(clientes))
    } catch (error) {
      if (error.messages) {
        return response.status(500).send(error.messages)
      } else {
        return response.status(500).send({ errors: [{ message: error.message }] })
      }
    }
  }

  public async store({ response, request, auth: { user } }: HttpContextContract) {
    try {
      await user?.load('cargo')
      if (!user?.cargo.aPagar.criar) {
        return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] })
      }
      await request
        .validate({
          schema: schema.create({
            fornecedorId: schema.number([rules.exists({ column: 'id', table: 'fornecedores' })]),
            valor: schema.number(),
            parcelas: schema.array().members(
              schema.object().members({
                valor: schema.number(),
                vencimento: schema.date(),
                parcela: schema.number(),
              })
            ),
          }),
          messages: {
            'fornecedorId.required': 'O cliente precisa ser informado',
            'fornecedorId.exists': 'Cliente não encontrado',
            'valor.required': 'O valor precisa ser informado',
            'parcelas.*.valor.required': 'O valor precisa ser informado',
            'parcelas.*.vencimento.required': 'O vencimento precisa ser informado',
            'parcelas.*.parcela.required': 'A parcela precisa ser informada',
          },
        })
        .then(async ({ parcelas, ...data }) => {
          await Pagar.create({ ...data, empresaId: user?.empresaId, createdBy: user?.id }).then(
            async (receber) => {
              await receber.related('parcelas').createMany(
                parcelas.map((parcela) => ({
                  ...parcela,
                  createdBy: user?.id,
                  updatedBy: user?.id,
                }))
              )
              return response.status(200)
            }
          )
        })
    } catch (error) {
      if (error.messages) {
        return response.status(500).send(error.messages)
      } else {
        return response.status(500).send({ errors: [{ message: error.message }] })
      }
    }
  }

  public async darBaixa({ params, response, auth: { user } }: HttpContextContract) {
    try {
      const { id } = params
      await user?.load('cargo')
      if (!user?.cargo.aPagar.atualizar) {
        return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] })
      }
      await Parcela.findOrFail(id).then(async (parcela) => {
        parcela.merge({
          status: true,
          pagamento: DateTime.now(),
          updatedBy: user?.id,
        })
        await parcela.save()
        await parcela.load('pagar', (query) => {
          query.preload('fornecedor', (query) => {
            query.preload('pagar', (query) => {
              query.preload('parcelas')
            })
          })
        })

        return response.status(200).send(parcela.pagar.fornecedor)
      })
    } catch (error) {
      return response.status(500).send({ errors: [{ message: error.message }] })
    }
  }
}
