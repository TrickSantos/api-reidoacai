import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Fornecedor from 'App/Models/Fornecedor'

export default class FornecedoresController {
  public async index({ response, auth: { user } }: HttpContextContract) {
    await user?.load('cargo')
    if (!user?.cargo.fornecedores.visualizar) {
      return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] })
    }
    try {
      await Fornecedor.query()
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

  public async store({ request, response, auth: { user } }: HttpContextContract) {
    try {
      await user?.load('cargo')
      if (!user?.cargo.fornecedores.criar) {
        return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] })
      }
      await request
        .validate({
          schema: schema.create({
            nome: schema.string(),
            razaoSocial: schema.string.optional(),
            email: schema.string({}, [
              rules.email(),
              rules.unique({ table: 'fornecedores', column: 'email' }),
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
          await Fornecedor.create({ ...data, empresaId: user?.empresaId }).then((cliente) =>
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

  public async update({ params, request, response, auth: { user } }: HttpContextContract) {
    const { id } = params
    try {
      await user?.load('cargo')
      if (!user?.cargo.fornecedores.atualizar) {
        return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] })
      }
      await request
        .validate({
          schema: schema.create({
            razaoSocial: schema.string.optional(),
            nome: schema.string.optional(),
            email: schema.string.optional({}, [
              rules.email(),
              rules.unique({ table: 'clientes', column: 'email', whereNot: { id: id } }),
            ]),
            telefone: schema.string.optional({}, [rules.mobile({ locales: ['pt-BR'] })]),
          }),
          messages: {
            'empresaId': 'A empresa precisa ser informada/válida',
            'nome.required': 'O nome precisa ser informado',
            'email.email': 'O email precisa estar em um formato válido',
            'email.unique': 'O email já está em uso, informe outro email',
            'telefone.mobile': 'O telefone precisa estar em um formato válido',
          },
        })
        .then(async (data) => {
          await Fornecedor.findOrFail(id).then(async (cliente) => {
            cliente.merge({ ...data, empresaId: user?.empresaId })
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

  public async destroy({ params, response, auth: { user } }: HttpContextContract) {
    try {
      const { id } = params
      await user?.load('cargo')
      if (!user?.cargo.fornecedores.apagar) {
        return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] })
      }
      await Fornecedor.findOrFail(id).then(async (cliente) => {
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
