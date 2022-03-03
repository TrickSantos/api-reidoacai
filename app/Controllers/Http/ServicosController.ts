import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Servico from 'App/Models/Servico'

export default class ServicosController {
  public async index({ response, auth }: HttpContextContract) {
    const { user } = auth
    try {
      await Servico.query()
        .where((builder) => {
          if (user) {
            builder.where({ empresaId: user.empresaId })
          }
        })
        .preload('unidade')
        .then((servicos) => response.status(200).send(servicos))
    } catch (error) {
      if (error.messages) {
        return response.status(500).send(error.messages)
      } else {
        return response.status(500).send({ errors: [{ message: error.message }] })
      }
    }
  }

  public async store({ request, response, auth }: HttpContextContract) {
    try {
      await request
        .validate({
          schema: schema.create({
            unidadeId: schema.number([rules.exists({ table: 'unidades', column: 'id' })]),
            servico: schema.string(),
            descricao: schema.string(),
            valor: schema.number(),
          }),
          messages: {
            servico: 'O serviço precisa ser informado',
            descricao: 'A descrição do serviço precisa ser informada',
            unidadeId: 'A unidade precisa ser informada',
            valor: 'O valor precisa ser informado',
          },
        })
        .then(async (data) => {
          await Servico.create({ ...data, empresaId: auth.user?.empresaId }).then((servico) =>
            response.status(200).send(servico)
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

  public async update({ params, request, response }: HttpContextContract) {
    try {
      await request
        .validate({
          schema: schema.create({
            unidadeId: schema.number.optional([rules.exists({ table: 'unidades', column: 'id' })]),
            servico: schema.string.optional(),
            descricao: schema.string.optional(),
            valor: schema.number.optional(),
          }),
          messages: {
            servico: 'O serviço precisa ser informado',
            descricao: 'A descrição do serviço precisa ser informada',
            unidadeId: 'A unidade precisa ser informada',
            valor: 'O valor precisa ser informado',
          },
        })
        .then(async (data) => {
          const { id } = params
          await Servico.findOrFail(id).then(async (servico) => {
            servico.merge(data)
            await servico.save()
            return response.status(200).send(servico)
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

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const { id } = params
      await Servico.findOrFail(id).then(async (servico) => {
        await servico.delete()
        return response.status(200)
      })
    } catch (error) {
      if (error.messages) {
        return response.status(500).send(error.messages)
      } else {
        return response.status(500).send({ errors: [{ message: error.message }] })
      }
    }
  }
}
