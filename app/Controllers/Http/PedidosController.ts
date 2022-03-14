import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Pedido from 'App/Models/Pedido'
import Movimentacao from 'App/Models/Movimentacao'
import Receber from 'App/Models/Receber'
import { DateTime } from 'luxon'
import PedidoProduto from 'App/Models/PedidoProduto'
import Caixa from 'App/Models/Caixa'

export default class PedidosController {
  public async index({ response, auth: { user } }: HttpContextContract) {
    try {
      await user?.load('cargo')
      if (!user?.cargo.pedidos.visualizar) {
        return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] })
      }
      await Pedido.query()
        .where((builder) => {
          if (user) {
            builder.where({ empresaId: user.empresaId })
          }
        })
        .preload('produtos', (query) => {
          query.pivotColumns(['desconto', 'quantidade', 'id'])
          query.preload('unidade')
        })
        .preload('cliente')
        .then((pedidos) => {
          const res = pedidos.map((pedido) => {
            if (pedido.produtos) {
              const temp = pedido.produtos
              return {
                ...pedido.serialize(),
                produtos: temp.map((produto) => {
                  return {
                    quantidade: produto.$extras.pivot_quantidade,
                    desconto: produto.$extras.pivot_desconto,
                    pedidoId: produto.$extras.pivot_pedido_id,
                    produtoId: produto.$extras.pivot_produto_id,
                    id: produto.$extras.pivot_id,
                    produto: produto.serialize(),
                  }
                }),
              }
            }
          })
          return response.status(200).send(res)
        })
    } catch (error) {
      if (error.messages) {
        return response.badRequest(error.messages)
      } else {
        return response.status(500).send({ errors: [{ message: error.message }] })
      }
    }
  }

  public async store({ request, response, auth: { user } }: HttpContextContract) {
    try {
      await user?.load('cargo')
      if (!user?.cargo.pedidos.criar) {
        return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] })
      }
      await request
        .validate({
          schema: schema.create({
            clienteId: schema.number([rules.exists({ table: 'clientes', column: 'id' })]),
            observacoes: schema.string.optional(),
          }),
          messages: {
            'clienteId.required': 'O cliente precisa ser informado',
            'clienteId.exists': 'O cliente precisa ser informado',
          },
        })
        .then(async (data) => {
          await Caixa.findByOrFail('data', new Date()).then((caixa) => {
            if (caixa.status === false) {
              throw new Error('Caixa fechado')
            }
          })
          await Pedido.create({
            ...data,
            status: 'Em aberto',
            empresaId: user?.empresaId,
            createdBy: user?.id,
          }).then(async (pedido) => {
            await pedido.load('cliente')
            await pedido.load('produtos')
            response.status(200).send(pedido)
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
      if (!user?.cargo.pedidos.atualizar) {
        return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] })
      }
      await request
        .validate({
          schema: schema.create({
            clienteId: schema.number.optional([rules.exists({ table: 'clientes', column: 'id' })]),
            empresaId: schema.number.optional([rules.exists({ table: 'empresas', column: 'id' })]),
            observacoes: schema.string.optional(),
          }),
          messages: {
            'clienteId.exists': 'O cliente precisa ser informado',
            'empresaId.exists': 'A empresa precisa ser informada',
          },
        })
        .then(async (data) => {
          const { id } = params
          await Pedido.findOrFail(id).then(async (pedido) => {
            pedido.merge(data)
            await pedido.save()
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

  public async addAdicional({ response, request, params, auth: { user } }: HttpContextContract) {
    try {
      await user?.load('cargo')
      if (!user?.cargo.pedidos.criar) {
        return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] })
      }
      await request
        .validate({
          schema: schema.create({
            produtoId: schema.number([rules.exists({ table: 'produtos', column: 'id' })]),
            quantidade: schema.number(),
            desconto: schema.number.optional(),
          }),
          messages: {
            produtoId: 'O produto precisa ser informado',
            quantidade: 'A quantidade precisa ser informada',
          },
        })
        .then(async ({ produtoId, quantidade, desconto }) => {
          const { id } = params
          await Pedido.findOrFail(id).then(async (pedido) => {
            await pedido.related('produtos').attach({
              [produtoId]: {
                quantidade,
                desconto,
              },
            })
            await pedido.load('produtos')
            await pedido.load('produtos', (query) => {
              query.pivotColumns(['desconto', 'quantidade', 'id'])
              query.preload('unidade')
            })

            const produtos = pedido.produtos.map((produto) => {
              return {
                quantidade: produto.$extras.pivot_quantidade,
                desconto: produto.$extras.pivot_desconto,
                pedidoId: produto.$extras.pivot_pedido_id,
                produtoId: produto.$extras.pivot_produto_id,
                id: produto.$extras.pivot_id,
                produto: produto.serialize(),
              }
            })

            return response.status(200).send(produtos)
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

  public async removeAdicional({ response, params, auth: { user } }: HttpContextContract) {
    try {
      const { id } = params
      await user?.load('cargo')
      if (!user?.cargo.pedidos.criar) {
        return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] })
      }
      await PedidoProduto.findOrFail(id).then(async (pedido) => {
        await pedido.delete()
        return response.status(200)
      })
    } catch (error) {
      return response.status(500).send({ errors: [{ message: error.message }] })
    }
  }

  public async pagar({ response, request, params, auth: { user } }: HttpContextContract) {
    try {
      await user?.load('cargo')
      if (!user?.cargo.pedidos.criar) {
        return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] })
      }
      await request
        .validate({
          schema: schema.create({
            status: schema.enum(['Finalizado']),
            valor: schema.number(),
            pagamento: schema.array().members(
              schema.object().members({
                formaPagamento: schema.enum(['dinheiro', 'credito', 'debito', 'pix']),
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
          await Pedido.findOrFail(id).then(async (pedido) => {
            pedido.merge({ status, valor, entrega: DateTime.now() })
            await pedido.save()
            await pedido.related('pagamento').createMany(pagamento)
            await Movimentacao.create({
              empresaId: user?.empresaId,
              createdBy: user?.id,
              descricao: `Pedido nº ${pedido.id}`,
              valor: pedido.valor,
              tipo: 'entrada',
              origem: 'pedidos',
            })
            await Receber.create({
              clienteId: pedido.clienteId,
              empresaId: user?.empresaId,
              createdBy: user?.id,
              valor: pedido.valor,
              status: 'pago',
            }).then(async (receber) => {
              let parcelas: {
                valor: number
                parcela: number
                vencimento: DateTime
                status: boolean
                createdBy?: number
                updatedBy?: number
              }[] = []
              pagamento.forEach((element) => {
                Array.from({ length: element.parcelas }, (_, index) => {
                  const valorParcela =
                    Math.round((element.valor / element.parcelas + Number.EPSILON) * 100) / 100

                  parcelas.push({
                    valor: valorParcela,
                    parcela: index + 1,
                    vencimento:
                      element.formaPagamento === 'credito'
                        ? DateTime.now().plus({ months: index + 1 })
                        : DateTime.now(),
                    status: true,
                    createdBy: user?.id,
                    updatedBy: user?.id,
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
