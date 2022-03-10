import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Pedido from 'App/Models/Pedido'
import Movimentacao from 'App/Models/Movimentacao'
import Receber from 'App/Models/Receber'
import { DateTime } from 'luxon'
import PedidoAdicional from 'App/Models/PedidoAdicional'
import Caixa from 'App/Models/Caixa'

export default class PedidosController {
  public async index({ response, auth }: HttpContextContract) {
    try {
      const { user } = auth
      await Pedido.query()
        .where((builder) => {
          if (user) {
            builder.where({ empresaId: user.empresaId })
          }
        })
        .preload('adicionais', (query) => {
          query.pivotColumns(['desconto', 'quantidade', 'id'])
          query.preload('unidade')
        })
        .preload('cliente')
        .then((pedidos) => {
          const ordens = pedidos.map((pedido) => {
            if (pedido.adicionais) {
              const temp = pedido.adicionais
              return {
                ...pedido.serialize(),
                adicionais: temp.map((adicional) => {
                  return {
                    quantidade: adicional.$extras.pivot_quantidade,
                    desconto: adicional.$extras.pivot_desconto,
                    pedidoId: adicional.$extras.pivot_pedido_id,
                    adicionalId: adicional.$extras.pivot_adicional_id,
                    id: adicional.$extras.pivot_id,
                    adicional: adicional.serialize(),
                  }
                }),
              }
            }
          })
          return response.status(200).send(ordens)
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
            empresaId: auth.user?.empresaId,
          }).then(async (pedido) => {
            await pedido.load('cliente')
            await pedido.load('adicionais')
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

  public async update({ request, response, params }: HttpContextContract) {
    try {
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

  public async destroy({}: HttpContextContract) {}

  public async addAdicional({ response, request, params }: HttpContextContract) {
    try {
      await request
        .validate({
          schema: schema.create({
            adicionalId: schema.number([rules.exists({ table: 'adicionais', column: 'id' })]),
            quantidade: schema.number(),
            desconto: schema.number.optional(),
          }),
          messages: {
            adicionalId: 'O adicional precisa ser informado',
            quantidade: 'A quantidade precisa ser informada',
          },
        })
        .then(async ({ adicionalId, quantidade, desconto }) => {
          const { id } = params
          await Pedido.findOrFail(id).then(async (pedido) => {
            await pedido.related('adicionais').attach({
              [adicionalId]: {
                quantidade,
                desconto,
              },
            })
            await pedido.load('adicionais')
            await pedido.load('adicionais', (query) => {
              query.pivotColumns(['desconto', 'quantidade', 'id'])
              query.preload('unidade')
            })

            const adicionais = pedido.adicionais.map((adicional) => {
              return {
                quantidade: adicional.$extras.pivot_quantidade,
                desconto: adicional.$extras.pivot_desconto,
                pedidoId: adicional.$extras.pivot_pedido_id,
                adicionalId: adicional.$extras.pivot_adicional_id,
                id: adicional.$extras.pivot_id,
                adicional: adicional.serialize(),
              }
            })

            return response.status(200).send(adicionais)
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

  public async removeAdicional({ response, params }: HttpContextContract) {
    try {
      const { id } = params
      await PedidoAdicional.findOrFail(id).then(async (pedido) => {
        await pedido.delete()
        return response.status(200)
      })
    } catch (error) {
      return response.status(500).send({ errors: [{ message: error.message }] })
    }
  }

  public async pagar({ response, request, params, auth }: HttpContextContract) {
    try {
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
          const { user } = auth
          await Pedido.findOrFail(id).then(async (pedido) => {
            pedido.merge({ status, valor, entrega: DateTime.now() })
            await pedido.save()
            await pedido.related('pagamento').createMany(pagamento)
            await Movimentacao.create({
              empresaId: user?.id,
              descricao: `Pedido nº ${pedido.id}`,
              valor: pedido.valor,
              tipo: 'entrada',
              origem: 'pedidos',
            })
            await Receber.create({
              clienteId: pedido.clienteId,
              empresaId: user?.id,
              valor: pedido.valor,
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
                      element.formaPagamento === 'credito'
                        ? DateTime.now().plus({ months: index + 1 })
                        : DateTime.now(),
                    status: element.formaPagamento === 'credito' ? false : true,
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
