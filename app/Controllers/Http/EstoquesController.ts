import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Estoque from 'App/Models/Estoque'

export default class EstoquesController {
  public async index({ response, auth: { user } }: HttpContextContract) {
    try {
      await Estoque.query()
        .where((builder) => {
          if (user) {
            builder.where({ empresaId: user.empresaId })
          }
        })
        .then((estoques) => response.status(200).send(estoques))
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
      await request
        .validate({
          schema: schema.create({
            empresaId: schema.number([rules.exists({ table: 'empresas', column: 'id' })]),
            produtoId: schema.number([rules.exists({ table: 'produtos', column: 'id' })]),
            quantidade: schema.number(),
            tipo: schema.enum(['entrada', 'saida'] as const),
          }),
          messages: {
            'empresaId.required': 'A empresa precisa ser informada',
            'empresaId.exists': 'A empresa precisa ser informada',
            'produtoId.required': 'O produto precisa ser informado',
            'produtoId.exists': 'O produto precisa ser informado',
            'quantidade.required': 'A quantidade precisa ser informada',
            'tipo.required': 'O tipo precisa ser informado',
            'tipo.enum': 'O tipo precisa ser informado',
          },
        })
        .then(async (data) => {
          await Estoque.create({ ...data, empresaId: user?.empresaId, createdBy: user?.id }).then(
            (estoque) => response.status(200).send(estoque)
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

  public async update({ request, response, params }: HttpContextContract) {
    try {
      await request
        .validate({
          schema: schema.create({
            empresaId: schema.number.optional([rules.exists({ table: 'empresas', column: 'id' })]),
            produtoId: schema.number.optional([rules.exists({ table: 'produtos', column: 'id' })]),
            quantidade: schema.number.optional(),
            tipo: schema.enum(['entrada', 'saida'] as const),
          }),
          messages: {
            'empresaId.required': 'A empresa precisa ser informada',
            'empresaId.exists': 'A empresa precisa ser informada',
            'produtoId.required': 'O produto precisa ser informado',
            'produtoId.exists': 'O produto precisa ser informado',
            'quantidade.required': 'A quantidade precisa ser informada',
            'tipo.required': 'O tipo precisa ser informado',
            'tipo.enum': 'O tipo precisa ser informado',
          },
        })
        .then(async (data) => {
          await Estoque.findOrFail(params.id).then(async (estoque) => {
            await estoque
              .merge(data)
              .save()
              .then((estoque) => response.status(200).send(estoque))
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
      await Estoque.findOrFail(params.id).then(async (estoque) => {
        await estoque
          .delete()
          .then(() => response.status(200).send({ message: 'Estoque deletado com sucesso' }))
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
