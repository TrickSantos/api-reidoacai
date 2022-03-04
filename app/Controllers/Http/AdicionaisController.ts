import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Adicionais from 'App/Models/Adicional'

export default class AdicionaisController {
  public async index({ response, auth }: HttpContextContract) {
    const { user } = auth
    try {
      await Adicionais.query()
        .where((builder) => {
          if (user) {
            builder.where({ empresaId: user.empresaId })
          }
        })
        .preload('unidade')
        .then((adicionais) => response.status(200).send(adicionais))
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
            adicional: schema.string(),
            descricao: schema.string(),
            valor: schema.number(),
          }),
          messages: {
            adicional: 'O adicional precisa ser informado',
            descricao: 'A descrição do adicional precisa ser informada',
            unidadeId: 'A unidade precisa ser informada',
            valor: 'O valor precisa ser informado',
          },
        })
        .then(async (data) => {
          await Adicionais.create({ ...data, empresaId: auth.user?.empresaId }).then((adicional) =>
            response.status(200).send(adicional)
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
            adicional: schema.string.optional(),
            descricao: schema.string.optional(),
            valor: schema.number.optional(),
          }),
          messages: {
            adicional: 'O adicional precisa ser informado',
            descricao: 'A descrição do adicional precisa ser informada',
            unidadeId: 'A unidade precisa ser informada',
            valor: 'O valor precisa ser informado',
          },
        })
        .then(async (data) => {
          const { id } = params
          await Adicionais.findOrFail(id).then(async (adicional) => {
            adicional.merge(data)
            await adicional.save()
            return response.status(200).send(adicional)
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
      await Adicionais.findOrFail(id).then(async (adicional) => {
        await adicional.delete()
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
