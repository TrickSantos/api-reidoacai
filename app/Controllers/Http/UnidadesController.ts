import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Unidade from 'App/Models/Unidade'

export default class UnidadesController {
  public async index({ response, auth: { user } }: HttpContextContract) {
    await user?.load('cargo')
    if (!user?.cargo.unidades.visualizar) {
      return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] })
    }
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

  public async store({ request, response, auth: { user } }: HttpContextContract) {
    try {
      await user?.load('cargo')
      if (!user?.cargo.unidades.criar) {
        return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] })
      }
      await request
        .validate({
          schema: schema.create({
            unidade: schema.string(),
          }),
          messages: {
            'unidade.required': 'O nome precisa ser informado',
          },
        })
        .then(async (data) => {
          await Unidade.create({ ...data, empresaId: user?.empresaId }).then((unidade) =>
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

  public async update({ params, request, response, auth: { user } }: HttpContextContract) {
    try {
      await user?.load('cargo')
      if (!user?.cargo.unidades.atualizar) {
        return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] })
      }
      await request
        .validate({
          schema: schema.create({
            unidade: schema.string.optional(),
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

  public async destroy({ params, response, auth: { user } }: HttpContextContract) {
    try {
      await user?.load('cargo')
      if (!user?.cargo.unidades.apagar) {
        return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] })
      }
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
