import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Unidade from 'App/Models/Unidade'

export default class UnidadesController {
  public async index({ response, auth }: HttpContextContract) {
    const { user } = auth
    try {
      await Unidade.query()
        .where((builder) => {
          if (user) {
            builder.where({ empresaId: user.empresaId })
          }
        })
        .orderBy('unidade', 'asc')
        .then((unidades) => response.status(200).send(unidades))
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
            unidade: schema.string(),
            nomenclatura: schema.string(),
          }),
          messages: {
            'unidade.required': 'O nome precisa ser informado',
            'nomenclatura.required': 'A nomenclatura precisa ser informada',
          },
        })
        .then(async (data) => {
          await Unidade.create({ ...data, empresaId: auth.user?.empresaId }).then((unidade) =>
            response.status(200).send(unidade)
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
            unidade: schema.string.optional(),
            nomenclatura: schema.string.optional(),
          }),
        })
        .then(async (data) => {
          const { id } = params
          await Unidade.findOrFail(id).then(async (unidade) => {
            unidade.merge(data)
            await unidade.save()
            return response.status(200).send(unidade)
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
      await Unidade.findOrFail(id).then(async (unidade) => {
        await unidade.delete()
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
