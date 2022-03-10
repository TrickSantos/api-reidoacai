import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Movimentacao from 'App/Models/Movimentacao'
import Caixa from 'App/Models/Caixa'
import { DateTime } from 'luxon'

export default class CaixasController {
  public async index({ response, request, auth }: HttpContextContract) {
    const { tipo, data } = request.all()
    try {
      const movimentacao = await Movimentacao.query().where((builder) => {
        if (tipo) {
          builder.where({ tipo })
        }
        if (data) {
          let parse = DateTime.fromFormat(data, 'yyyy-MM-dd')
          builder.whereRaw(`created::date = date '${parse.toSQLDate()}'`)
        }
        builder.where({ empresaId: auth.user?.empresaId })
        console.log(builder.toSQL())
      })
      console.log(movimentacao)
      return response.status(200).send(movimentacao)
    } catch (error) {
      return response
        .status(500)
        .send({ errors: [{ message: 'Erro ao encontrar movimentações, tente novamente' }] })
    }
  }

  public async store({ response, request, auth }: HttpContextContract) {
    try {
      await request
        .validate({
          schema: schema.create({
            descricao: schema.string(),
            valor: schema.number(),
            tipo: schema.enum(['entrada', 'saida']),
            origem: schema.enum(['pedidos', 'outros']),
          }),
          messages: {
            'descricao': 'A descrição precisa ser informada',
            'valor': 'O valor precisa ser informado',
            'tipo.enum': 'O tipo precisa ser Entrada ou Saída',
            'tipo.required': 'O tipo precisa ser informado',
            'origem': 'A origem precisa ser informada',
          },
        })
        .then(async (data) => {
          await Caixa.findByOrFail('data', new Date()).then((caixa) => {
            if (caixa.status === false) {
              throw new Error('Caixa fechado')
            }
          })
          const movimentacao = await Movimentacao.create({
            ...data,
            empresaId: auth.user?.empresaId,
          })
          return response.status(200).send(movimentacao)
        })
    } catch (error) {
      if (error.messages) {
        return response.status(500).send(error.messages)
      } else {
        return response.status(500).send({ errors: [{ message: error.message }] })
      }
    }
  }

  public async fecharCaixa({ response, request, params, auth }: HttpContextContract) {
    try {
      const { id } = params
      await request
        .validate({
          schema: schema.create({
            valor: schema.number(),
          }),
          messages: {
            valor: 'O valor precisa ser informado',
          },
        })
        .then(async (data) => {
          await Caixa.findOrFail(id).then(async (caixa) => {
            caixa.merge({ ...data, empresaId: auth.user?.empresaId, status: false })
            await caixa.save()
            return response.status(200).send(caixa)
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

  public async abrirCaixa({ response, auth }: HttpContextContract) {
    try {
      await Caixa.create({
        empresaId: auth.user?.empresaId,
        data: DateTime.now(),
        valor: 0,
        status: true,
      }).then((caixa) => response.status(200).send(caixa))
    } catch (error) {
      return response.status(500).send({ errors: [{ message: error.message }] })
    }
  }

  public async reabrirCaixa({ response, params, auth }: HttpContextContract) {
    try {
      const user = auth.user
      const { id } = params
      if (user) {
        await user.load('cargo')
        if (user.cargo.caixa.atualizar === false) {
          throw new Error('Permissão negada!')
        }
      }
      await Caixa.findOrFail(id).then(async (caixa) => {
        caixa.merge({
          status: true,
        })
        await caixa.save()
        return response.status(200).send(caixa)
      })
    } catch (error) {
      return response.status(500).send({ errors: [{ message: error.message }] })
    }
  }

  public async verificarCaixa({ response, request, auth }: HttpContextContract) {
    try {
      const { data } = request.all()
      await Caixa.query()
        .where((builder) => {
          const parse = DateTime.fromFormat(data, 'yyyy-MM-dd')
          builder.whereRaw(`data::date = '${parse.toSQLDate()}'`)
          builder.where({ empresaId: auth.user?.empresaId })
        })
        .then((caixa) => response.status(200).send(caixa[0]))
    } catch (error) {
      return response.status(500).send({ errors: [{ message: error.message }] })
    }
  }
}
