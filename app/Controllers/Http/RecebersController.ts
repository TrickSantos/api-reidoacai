import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Cliente from 'App/Models/Cliente'
import Receber from 'App/Models/Receber'
import Parcela from 'App/Models/ReceberParcelado'
import { DateTime } from 'luxon'

export default class RecebersController {
  public async index({ response, auth }: HttpContextContract) {
    const { user } = auth
    try {
      await Cliente.query()
        .where((builder) => {
          if (user) {
            builder.where({ empresaId: user.empresaId })
          }
        })
        .has('aReceber')
        .preload('aReceber', (query) => query.preload('parcelas'))
        .then((clientes) => response.status(200).send(clientes))
    } catch (error) {
      if (error.messages) {
        return response.status(500).send(error.messages)
      } else {
        return response.status(500).send({ errors: [{ message: error.message }] })
      }
    }
  }

  public async store({ response, request, auth }: HttpContextContract) {
    const { user } = auth
    try {
      await request
        .validate({
          schema: schema.create({
            clienteId: schema.number([rules.exists({ column: 'id', table: 'clientes' })]),
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
            'clienteId.required': 'O cliente precisa ser informado',
            'clienteId.exists': 'Cliente não encontrado',
            'valor.required': 'O valor precisa ser informado',
            'parcelas.*.valor.required': 'O valor precisa ser informado',
            'parcelas.*.vencimento.required': 'O vencimento precisa ser informado',
            'parcelas.*.parcela.required': 'A parcela precisa ser informada',
          },
        })
        .then(async (data) => {
          await Receber.create({ ...data, empresaId: user?.empresaId }).then(async (receber) => {
            await receber.related('parcelas').createMany(data.parcelas)
            return response.status(200)
          })
        })
    } catch (error) {
      if (error.messages) {
        return response.status(500).send(error.messages)
      } else {
        return response.status(500).send({ errors: [{ message: error.message }] })
      }
    }
  }

  public async darBaixa({ params, response }: HttpContextContract) {
    try {
      const { id } = params
      await Parcela.findOrFail(id).then(async (parcela) => {
        parcela.merge({
          status: true,
          pagamento: DateTime.now(),
        })
        await parcela.save()
        await parcela.load('receber', (query) => {
          query.preload('cliente', (query) => {
            query.preload('aReceber', (query) => {
              query.preload('parcelas')
            })
          })
        })

        return response.status(200).send(parcela.receber.cliente)
      })
    } catch (error) {
      return response.status(500).send({ errors: [{ message: error.message }] })
    }
  }
}
