import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Users from 'App/Models/Users'

export default class UsersController {
  public async index({ response, auth }: HttpContextContract) {
    try {
      const user = auth.user
      await Users.query()
        .where((builder) => {
          if (user) {
            builder.where('empresa_id', user.empresaId)
          }
        })
        .preload('cargo')
        .then((users) => response.status(200).send(users))
    } catch (error) {
      console.log(error.message)
      return response.status(500).send({ errors: [{ message: error.message }] })
    }
  }

  public async store({ request, response, auth }: HttpContextContract) {
    try {
      await request
        .validate({
          schema: schema.create({
            email: schema.string({ trim: true }, [
              rules.email(),
              rules.unique({ table: 'users', column: 'email' }),
            ]),
            cargoId: schema.number([
              rules.exists({
                column: 'id',
                table: 'cargos',
                where: {
                  empresa_id: auth.user?.empresaId,
                },
              }),
            ]),
            password: schema.string(),
            nome: schema.string(),
            cpf: schema.string({}, [rules.unique({ table: 'users', column: 'cpf' })]),
          }),
          messages: {
            'email.required': 'O email precisa ser informado',
            'email.email': 'O email precisa ser válido',
            'password.required': 'A senha precisa ser informada',
            'nome.required': 'O nome precisa ser informado',
            'cpf.required': 'O CPF precisa ser informado',
            'cargoId.exists': 'O cargo não foi encontrado',
          },
        })
        .then(async (data) => {
          await Users.create({ ...data, empresaId: auth.user?.empresaId }).then((user) =>
            response.status(200).send(user)
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

  public async update({ request, response, params, auth }: HttpContextContract) {
    try {
      await request
        .validate({
          schema: schema.create({
            empresaId: schema.number.optional([
              rules.exists({
                column: 'id',
                table: 'users',
              }),
            ]),
            email: schema.string.optional({ trim: true }, [
              rules.email(),
              rules.unique({ table: 'users', column: 'email' }),
            ]),
            password: schema.string.optional(),
            nome: schema.string.optional(),
            cpf: schema.string.optional({}, [rules.unique({ table: 'users', column: 'cpf' })]),
            cargoId: schema.number.optional([
              rules.exists({
                column: 'id',
                table: 'cargos',
                where: {
                  empresa_id: auth.user?.empresaId,
                },
              }),
            ]),
            image: schema.file.optional({ size: '10mb', extnames: ['jpg', 'png'] }),
          }),
          messages: {
            'empresaId.required': 'A empresa precisa ser informada',
            'empresaId.exists': 'Empresa não encontrada',
            'email.required': 'O email precisa ser informado',
            'email.email': 'O email precisa ser válido',
            'password.required': 'A senha precisa ser informada',
            'nome.required': 'O nome precisa ser informado',
            'cpf.required': 'O CPF precisa ser informado',
            'cargoId.exists': 'O cargo não foi encontrado',
            'image.file.extnames': 'A imagem precisa estar em um formato permitido',
            'image.file.size': 'A imagem precisa ser menor que 10mb',
          },
        })
        .then(async (data) => {
          const { id } = params

          await Users.findOrFail(id).then(async (user) => {
            user.merge({ ...data })
            await user.save()
            response.status(200).send(user)
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

  public async destroy({ response, params }: HttpContextContract) {
    try {
      const { id } = params
      await Users.findOrFail(id).then(async (user) => {
        await user.delete()
        return response.status(200)
      })
    } catch (error) {
      return response.status(500).send({ errors: [{ message: error.message }] })
    }
  }
}
