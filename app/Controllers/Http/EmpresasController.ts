import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Empresa from 'App/Models/Empresa'
import NovaEmpresa from 'App/Mailers/NovaEmpresa'

const base = {
  criar: true,
  visualizar: true,
  atualizar: true,
  apagar: true,
}

export default class EmpresasController {
  public async index({ response, auth: { user } }: HttpContextContract) {
    try {
      await user?.load('cargo')
      if (!user?.cargo.empresas.visualizar) {
        return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] })
      }
      await Empresa.all().then((empresas) => response.status(200).send(empresas))
    } catch (error) {
      console.log(error.message)
      return response.status(500).send({ errors: [{ message: error.message }] })
    }
  }

  public async store({ request, response, auth: { user } }: HttpContextContract) {
    try {
      await user?.load('cargo')
      if (!user?.cargo.empresas.criar) {
        return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] })
      }
      await request
        .validate({
          schema: schema.create({
            razaoSocial: schema.string({}, [
              rules.unique({ table: 'empresas', column: 'razao_social' }),
            ]),
            nomeFantasia: schema.string({}, [
              rules.unique({ table: 'empresas', column: 'nome_fantasia' }),
            ]),
            cnpjCpf: schema.string({}, [rules.unique({ table: 'empresas', column: 'cnpj_cpf' })]),
            email: schema.string({}, [
              rules.email(),
              rules.unique({ table: 'empresas', column: 'email' }),
              rules.unique({ table: 'users', column: 'email' }),
            ]),
            telefone: schema.string.optional({}, [
              rules.mobile({
                locales: ['pt-BR'],
              }),
            ]),
            endereco: schema.string.optional(),
            plano: schema.enum.optional(['Admin', 'Basico']),
            status: schema.boolean.optional(),
          }),
          messages: {
            'razaoSocial.required': 'A Razão Social precisa ser informada',
            'nomeFantasia.required': 'O Nome Fantasia precisa ser informado',
            'cnpjCpf.required': 'O CNPJ/CPF precisa ser informado',
            'email.required': 'O email precisa ser informado',
            'email.email': 'O email precisa ser um email valido',
            'email.unique': 'O email já está sendo usado',
            'telefone.mobile': 'O telefone precisa estar num formato válido',
          },
        })
        .then(async (data) => {
          await Database.transaction(async (trx) => {
            const empresa = new Empresa()
            empresa.merge(data)

            empresa.useTransaction(trx)
            await empresa.save()

            await empresa
              .related('cargos')
              .create({
                nome: 'Super Admin',
                aPagar: base,
                aReceber: base,
                caixa: base,
                empresas: base,
                usuarios: base,
                cargos: base,
                clientes: base,
                fornecedores: base,
                pedidos: base,
                unidades: base,
                produtos: base,
                estoque: base,
              })
              .then(async (cargo) => {
                cargo.useTransaction(trx)
                await cargo
                  .related('users')
                  .create({
                    nome: 'Administrador',
                    cpf: empresa.cnpjCpf,
                    email: empresa.email,
                    password: empresa.cnpjCpf,
                    empresaId: empresa.id,
                  })
                  .then(async (user) => {
                    user.useTransaction(trx)
                    await empresa
                      .related('clientes')
                      .create({
                        nome: 'Consumidor Final',
                        telefone: '65999999999',
                      })
                      .then(async () => {
                        await trx.commit()
                        await new NovaEmpresa(empresa).send()
                        response.status(200).send(empresa)
                      })
                  })
                  .catch(async (e) => {
                    await trx.rollback()
                    throw new Error(e)
                  })
              })
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

  public async update({ request, response, params, auth: { user } }: HttpContextContract) {
    try {
      await user?.load('cargo')
      if (!user?.cargo.empresas.atualizar) {
        return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] })
      }
      await request
        .validate({
          schema: schema.create({
            razaoSocial: schema.string.optional({}, [
              rules.unique({ table: 'empresas', column: 'razao_social' }),
            ]),
            nomeFantasia: schema.string.optional({}, [
              rules.unique({ table: 'empresas', column: 'nome_fantasia' }),
            ]),
            cnpjCpf: schema.string.optional({}, [
              rules.unique({ table: 'empresas', column: 'cnpj_cpf' }),
            ]),
            email: schema.string.optional({}, [
              rules.email(),
              rules.unique({ table: 'empresas', column: 'email' }),
            ]),
            plano: schema.enum.optional(['Admin', 'Basico']),
            telefone: schema.string.optional({}, [
              rules.mobile({
                locales: ['pt-BR'],
              }),
            ]),
            endereco: schema.string.optional(),
            status: schema.boolean.optional(),
          }),
          messages: {
            'email.email': 'O email precisa ser um email valido',
            'telefone.mobile': 'O telefone precisa estar num formato válido',
          },
        })
        .then(async (data) => {
          const { id } = params
          await Empresa.findOrFail(id).then(async (empresa) => {
            empresa.merge(data)
            await empresa.save()
            return response.status(200).send(empresa)
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

  public async destroy({ response, params, auth: { user } }: HttpContextContract) {
    try {
      const { id } = params
      await user?.load('cargo')
      if (!user?.cargo.empresas.apagar) {
        return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] })
      }
      await Empresa.findOrFail(id).then(async (empresa) => {
        await empresa.delete()
        return response.status(200)
      })
    } catch (error) {
      console.log(error.message)
      return response.status(500).send({ errors: [{ message: error.message }] })
    }
  }
}
