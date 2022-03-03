import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import OrdemServico from 'App/Models/OrdemServico'
import Movimentacao from 'App/Models/Movimentacao'
import Receber from 'App/Models/Receber'
import { DateTime } from 'luxon'
import OsServico from 'App/Models/OsServico'
import Caixa from 'App/Models/Caixa'

export default class OrdemServicosController {
  public async index({ response, auth, request }: HttpContextContract) {
    try {
      await request
        .validate({
          schema: schema.create({
            tipo: schema.enum(['servico', 'os']),
          }),
          messages: {
            'tipo.required': 'O tipo precisa ser informado',
            'tipo.enum': 'O tipo precisa ser informado',
          },
        })
        .then(async ({ tipo }) => {
          const { user } = auth
          await OrdemServico.query()
            .where((builder) => {
              if (user) {
                builder.where({ empresaId: user.empresaId })
              }
              builder.where({ tipo })
            })
            .preload('servicos', (query) => {
              query.pivotColumns(['desconto', 'quantidade', 'id'])
              query.preload('unidade')
            })
            .preload('cliente')
            .then((os) => {
              const ordens = os.map((oServico) => {
                if (oServico.servicos) {
                  const temp = oServico.servicos
                  return {
                    ...oServico.serialize(),
                    servicos: temp.map((s) => {
                      return {
                        quantidade: s.$extras.pivot_quantidade,
                        desconto: s.$extras.pivot_desconto,
                        ordemServicoId: s.$extras.pivot_ordem_servico_id,
                        servicoId: s.$extras.pivot_servico_id,
                        id: s.$extras.pivot_id,
                        servico: s.serialize(),
                      }
                    }),
                  }
                }
              })
              return response.status(200).send(ordens)
            })
        })
    } catch (error) {
      if (error.messages) {
        return response.badRequest(error.messages)
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
            clienteId: schema.number([rules.exists({ table: 'clientes', column: 'id' })]),
            tipo: schema.enum(['servico', 'os']),
            etiqueta: schema.string.optional(),
            produtoAnalise: schema.string.optional(),
            observacoes: schema.string.optional(),
            problema: schema.string.optional(),
          }),
          messages: {
            clienteId: 'O cliente precisa ser informado',
            produtoAnalise: 'A analise do produto precisa ser informada',
            problema: 'O problema precisa ser informada',
          },
        })
        .then(async (data) => {
          await Caixa.findByOrFail('data', new Date()).then((caixa) => {
            if (caixa.status === false) {
              throw new Error('Caixa fechado')
            }
          })
          await OrdemServico.create({
            ...data,
            status: 'Em aberto',
            empresaId: auth.user?.empresaId,
          }).then(async (os) => {
            await os.load('cliente')
            await os.load('servicos')
            response.status(200).send(os)
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

  public async update({ request, response, params }: HttpContextContract) {
    try {
      await request
        .validate({
          schema: schema.create({
            clienteId: schema.number.optional([rules.exists({ table: 'clientes', column: 'id' })]),
            empresaId: schema.number.optional([rules.exists({ table: 'empresas', column: 'id' })]),
            etiqueta: schema.string.optional(),
            tipo: schema.enum(['servico', 'os']),
            produtoAnalise: schema.string.optional(),
            observacoes: schema.string.optional(),
            problema: schema.string.optional(),
            solucao: schema.string.optional(),
            garantia: schema.number.optional(),
          }),
          messages: {
            clienteId: 'O cliente precisa ser informado',
            empresaId: 'A empresa precisa ser informada',
            produtoAnalise: 'A analise do produto precisa ser informada',
            problema: 'O problema precisa ser informada',
          },
        })
        .then(async (data) => {
          const { id } = params
          await OrdemServico.findOrFail(id).then(async (os) => {
            os.merge(data)
            await os.save()
            response.status(200)
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

  public async destroy({}: HttpContextContract) {}

  public async addService({ response, request, params }: HttpContextContract) {
    try {
      await request
        .validate({
          schema: schema.create({
            servicoId: schema.number([rules.exists({ table: 'servicos', column: 'id' })]),
            quantidade: schema.number(),
            desconto: schema.number.optional(),
          }),
          messages: {
            servicoId: 'O serviço precisa ser informado',
            quantidade: 'A quantidade precisa ser informada',
          },
        })
        .then(async ({ servicoId, quantidade, desconto }) => {
          const { id } = params
          await OrdemServico.findOrFail(id).then(async (os) => {
            await os.related('servicos').attach({
              [servicoId]: {
                quantidade,
                desconto,
              },
            })
            await os.load('servicos')
            await os.load('servicos', (query) => {
              query.pivotColumns(['desconto', 'quantidade', 'id'])
              query.preload('unidade')
            })

            const servicos = os.servicos.map((serv) => {
              return {
                quantidade: serv.$extras.pivot_quantidade,
                desconto: serv.$extras.pivot_desconto,
                ordemServicoId: serv.$extras.pivot_ordem_servico_id,
                servicoId: serv.$extras.pivot_servico_id,
                id: serv.$extras.pivot_id,
                servico: serv.serialize(),
              }
            })

            return response.status(200).send(servicos)
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

  public async removeService({ response, params }: HttpContextContract) {
    try {
      const { id } = params
      await OsServico.findOrFail(id).then(async (servico) => {
        await servico.delete()
        return response.status(200)
      })
    } catch (error) {
      return response.status(500).send({ errors: [{ message: error.message }] })
    }
  }

  public async pagar({ response, request, params }: HttpContextContract) {
    try {
      await request
        .validate({
          schema: schema.create({
            status: schema.enum(['Finalizado']),
            valor: schema.number(),
            pagamento: schema.array().members(
              schema.object().members({
                formaPagamento: schema.enum(['dinheiro', 'credito', 'debito', 'pix', 'prazo']),
                parcelas: schema.number(),
                valor: schema.number(),
              })
            ),
          }),
          messages: {
            'status.required': 'O status precisa ser informado',
            'status.enum': 'O status precisa ser do tipo finalizado',
            'valor.required': 'O valor precisa ser informado',
            'pagamento.*.formaPagamento.required': 'A forma de pagamento precisa ser informada',
            'pagamento.*.formaPagamento.enum':
              'As formas de pagamento precisam ser uma das seguintes: dinheiro, credito, debito ou pix',
            'pagamento.*.parcelas.required': 'As parcelas precisam ser informadas',
            'pagamento.*.valor.required': 'O valor precisa ser informado',
          },
        })
        .then(async ({ status, valor, pagamento }) => {
          const { id } = params
          await OrdemServico.findOrFail(id).then(async (os) => {
            os.merge({ status, valor, entrega: DateTime.now() })
            await os.save()
            await os.related('pagamento').createMany(pagamento)
            await Movimentacao.create({
              empresaId: 1,
              descricao: `Ordem de serviço nº ${os.id}`,
              valor: os.valor,
              tipo: 'entrada',
              origem: 'os',
            })
            await Receber.create({
              clienteId: os.clienteId,
              empresaId: 1,
              valor: os.valor,
              status: 'aguardando',
            }).then(async (receber) => {
              let parcelas: {
                valor: number
                parcela: number
                vencimento: DateTime
                status: boolean
              }[] = []
              pagamento.forEach((element) => {
                Array.from({ length: element.parcelas }, (_, index) => {
                  const valorParcela =
                    Math.round((element.valor / element.parcelas + Number.EPSILON) * 100) / 100

                  parcelas.push({
                    valor: valorParcela,
                    parcela: index + 1,
                    vencimento:
                      element.formaPagamento === 'credito' || element.formaPagamento === 'prazo'
                        ? DateTime.now().plus({ months: index + 1 })
                        : DateTime.now(),
                    status:
                      element.formaPagamento === 'credito' || element.formaPagamento === 'prazo'
                        ? false
                        : true,
                  })
                })
              })
              await receber.related('parcelas').createMany(parcelas)
              return response.status(200)
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
}
