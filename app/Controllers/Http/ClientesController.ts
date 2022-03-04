import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Cliente from 'App/Models/Cliente'

export default class ClientesController {
  public async index({ response, auth }: HttpContextContract) {
    const { user } = auth
    try {
      await Cliente.query()
        .where((builder) => {
          if (user) {
            builder.where({ empresaId: user.empresaId })
          }
        })
        .then((clientes) => response.status(200).send(clientes))
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
            nome: schema.string(),
            email: schema.string({}, [
              rules.email(),
              rules.unique({ table: 'clientes', column: 'email' }),
            ]),
            telefone: schema.string.optional({}, [rules.mobile({ locales: ['pt-BR'] })]),
          }),
          messages: {
            'nome.required': 'O nome precisa ser informado',
            'email.required': 'O email precisa ser informado',
            'email.email': 'O email precisa estar em um formato válido',
            'email.unique': 'O email já está em uso, informe outro email',
            'telefone.mobile': 'O telefone precisa estar em um formato válido',
          },
        })
        .then(async (data) => {
          await Cliente.create({ ...data, empresaId: auth.user?.empresaId }).then((cliente) =>
            response.status(200).send(cliente)
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
    const { id } = params
    try {
      await request
        .validate({
          schema: schema.create({
            nome: schema.string.optional(),
            email: schema.string.optional({}, [
              rules.email(),
              rules.unique({ table: 'clientes', column: 'email', whereNot: { id: id } }),
            ]),
            telefone: schema.string.optional({}, [rules.mobile({ locales: ['pt-BR'] })]),
          }),
          messages: {
            'nome.required': 'O nome precisa ser informado',
            'email.email': 'O email precisa estar em um formato válido',
            'email.unique': 'O email já está em uso, informe outro email',
            'telefone.mobile': 'O telefone precisa estar em um formato válido',
          },
        })
        .then(async (data) => {
          await Cliente.findOrFail(id).then(async (cliente) => {
            cliente.merge(data)
            await cliente.save()
            return response.status(200).send(cliente)
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
      await Cliente.findOrFail(id).then(async (cliente) => {
        await cliente.delete()
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
