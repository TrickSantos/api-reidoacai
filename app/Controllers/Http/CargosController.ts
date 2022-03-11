import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Cargo from 'App/Models/Cargo'

export default class CargosController {
  public async index({ response, auth }: HttpContextContract) {
    try {
      await Cargo.query()
        .where({ empresaId: auth.user?.empresaId })
        .then((cargos) => response.status(200).send(cargos))
    } catch (error) {
      console.log(error)
      return response.status(500).send({ errors: [{ message: error.message }] })
    }
  }

  public async store({ request, response, auth: { user } }: HttpContextContract) {
    try {
      await request
        .validate({
          schema: schema.create({
            nome: schema.string(),
            pdv: schema.object.optional().members({
              criar: schema.boolean(),
              visualizar: schema.boolean(),
              atualizar: schema.boolean(),
              apagar: schema.boolean(),
            }),
            pedidos: schema.object.optional().members({
              criar: schema.boolean(),
              visualizar: schema.boolean(),
              atualizar: schema.boolean(),
              apagar: schema.boolean(),
            }),
            produtos: schema.object.optional().members({
              criar: schema.boolean(),
              visualizar: schema.boolean(),
              atualizar: schema.boolean(),
              apagar: schema.boolean(),
            }),
            estoque: schema.object.optional().members({
              criar: schema.boolean(),
              visualizar: schema.boolean(),
              atualizar: schema.boolean(),
              apagar: schema.boolean(),
            }),
            clientes: schema.object.optional().members({
              criar: schema.boolean(),
              visualizar: schema.boolean(),
              atualizar: schema.boolean(),
              apagar: schema.boolean(),
            }),
            fornecedores: schema.object.optional().members({
              criar: schema.boolean(),
              visualizar: schema.boolean(),
              atualizar: schema.boolean(),
              apagar: schema.boolean(),
            }),
            unidades: schema.object.optional().members({
              criar: schema.boolean(),
              visualizar: schema.boolean(),
              atualizar: schema.boolean(),
              apagar: schema.boolean(),
            }),
            aPagar: schema.object.optional().members({
              criar: schema.boolean(),
              visualizar: schema.boolean(),
              atualizar: schema.boolean(),
              apagar: schema.boolean(),
            }),
            aReceber: schema.object.optional().members({
              criar: schema.boolean(),
              visualizar: schema.boolean(),
              atualizar: schema.boolean(),
              apagar: schema.boolean(),
            }),
            caixa: schema.object.optional().members({
              criar: schema.boolean(),
              visualizar: schema.boolean(),
              atualizar: schema.boolean(),
              apagar: schema.boolean(),
            }),
            empresas: schema.object.optional().members({
              criar: schema.boolean(),
              visualizar: schema.boolean(),
              atualizar: schema.boolean(),
              apagar: schema.boolean(),
            }),
            usuarios: schema.object.optional().members({
              criar: schema.boolean(),
              visualizar: schema.boolean(),
              atualizar: schema.boolean(),
              apagar: schema.boolean(),
            }),
            cargos: schema.object.optional().members({
              criar: schema.boolean(),
              visualizar: schema.boolean(),
              atualizar: schema.boolean(),
              apagar: schema.boolean(),
            }),
          }),
          messages: {
            'nome.required': 'O nome do cargo precisa ser informado',
          },
        })
        .then(async (data) => {
          await Cargo.create({ ...data, empresaId: user?.empresaId, createdBy: user?.id }).then(
            (cargo) => response.status(200).send(cargo)
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

  public async update({ request, response, params, auth: { user } }: HttpContextContract) {
    try {
      await request
        .validate({
          schema: schema.create({
            nome: schema.string.optional(),
            pdv: schema.object.optional().members({
              criar: schema.boolean(),
              visualizar: schema.boolean(),
              atualizar: schema.boolean(),
              apagar: schema.boolean(),
            }),
            pedidos: schema.object.optional().members({
              criar: schema.boolean(),
              visualizar: schema.boolean(),
              atualizar: schema.boolean(),
              apagar: schema.boolean(),
            }),
            produtos: schema.object.optional().members({
              criar: schema.boolean(),
              visualizar: schema.boolean(),
              atualizar: schema.boolean(),
              apagar: schema.boolean(),
            }),
            estoque: schema.object.optional().members({
              criar: schema.boolean(),
              visualizar: schema.boolean(),
              atualizar: schema.boolean(),
              apagar: schema.boolean(),
            }),
            clientes: schema.object.optional().members({
              criar: schema.boolean(),
              visualizar: schema.boolean(),
              atualizar: schema.boolean(),
              apagar: schema.boolean(),
            }),
            fornecedores: schema.object.optional().members({
              criar: schema.boolean(),
              visualizar: schema.boolean(),
              atualizar: schema.boolean(),
              apagar: schema.boolean(),
            }),
            unidades: schema.object.optional().members({
              criar: schema.boolean(),
              visualizar: schema.boolean(),
              atualizar: schema.boolean(),
              apagar: schema.boolean(),
            }),
            aPagar: schema.object.optional().members({
              criar: schema.boolean(),
              visualizar: schema.boolean(),
              atualizar: schema.boolean(),
              apagar: schema.boolean(),
            }),
            aReceber: schema.object.optional().members({
              criar: schema.boolean(),
              visualizar: schema.boolean(),
              atualizar: schema.boolean(),
              apagar: schema.boolean(),
            }),
            caixa: schema.object.optional().members({
              criar: schema.boolean(),
              visualizar: schema.boolean(),
              atualizar: schema.boolean(),
              apagar: schema.boolean(),
            }),
            empresas: schema.object.optional().members({
              criar: schema.boolean(),
              visualizar: schema.boolean(),
              atualizar: schema.boolean(),
              apagar: schema.boolean(),
            }),
            usuarios: schema.object.optional().members({
              criar: schema.boolean(),
              visualizar: schema.boolean(),
              atualizar: schema.boolean(),
              apagar: schema.boolean(),
            }),
            cargos: schema.object().members({
              criar: schema.boolean(),
              visualizar: schema.boolean(),
              atualizar: schema.boolean(),
              apagar: schema.boolean(),
            }),
          }),
          messages: {
            nome: 'O nome do cargo precisa ser informado',
          },
        })
        .then(async (data) => {
          const { id } = params
          await Cargo.findOrFail(id).then(async (cargo) => {
            cargo.merge({ ...data, empresaId: user?.empresaId })
            await cargo.save()
            return response.status(200).send(cargo)
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
      await Cargo.findOrFail(id).then(async (cargo) => {
        await cargo.delete()
        return response.status(200)
      })
    } catch (error) {
      return response.status(500).send({ errors: [{ message: error.message }] })
    }
  }
}
