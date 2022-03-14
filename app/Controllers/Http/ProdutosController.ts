import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Produtos from 'App/Models/Produto'

export default class ProdutosController {
  public async index({ response, auth }: HttpContextContract) {
    const { user } = auth
    try {
      await Produtos.query()
        .where((builder) => {
          if (user) {
            builder.where({ empresaId: user.empresaId })
          }
        })
        .preload('unidade')
        .then((produtos) => response.status(200).send(produtos))
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
            nome: schema.string(),
            descricao: schema.string(),
            valor: schema.number(),
          }),
          messages: {
            'nome.required': 'O produto precisa ser informado',
            'descricao.required': 'A descrição do produto precisa ser informada',
            'unidadeId.required': 'A unidade precisa ser informada',
            'valor.required': 'O valor precisa ser informado',
          },
        })
        .then(async (data) => {
          await Produtos.create({ ...data, empresaId: auth.user?.empresaId }).then((produto) =>
            response.status(200).send(produto)
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
            nome: schema.string.optional(),
            descricao: schema.string.optional(),
            valor: schema.number.optional(),
          }),
          messages: {
            'unidadeId.exists': 'A unidade precisa ser informada',
          },
        })
        .then(async (data) => {
          const { id } = params
          await Produtos.findOrFail(id).then(async (produto) => {
            produto.merge(data)
            await produto.save()
            return response.status(200).send(produto)
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
      await Produtos.findOrFail(id).then(async (produto) => {
        await produto.delete()
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
