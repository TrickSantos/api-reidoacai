"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const Pedido_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Pedido"));
const Movimentacao_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Movimentacao"));
const Receber_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Receber"));
const luxon_1 = require("luxon");
const PedidoProduto_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/PedidoProduto"));
const Caixa_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Caixa"));
class PedidosController {
    async index({ response, auth: { user } }) {
        try {
            await user?.load('cargo');
            if (!user?.cargo.pedidos.visualizar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            await Pedido_1.default.query()
                .where((builder) => {
                if (user) {
                    builder.where({ empresaId: user.empresaId });
                }
            })
                .orderBy('id', 'desc')
                .preload('produtos', (query) => {
                query.pivotColumns(['desconto', 'quantidade', 'id']);
                query.preload('unidade');
            })
                .preload('cliente')
                .then((pedidos) => {
                const res = pedidos.map((pedido) => {
                    if (pedido.produtos) {
                        const temp = pedido.produtos;
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
                                };
                            }),
                        };
                    }
                });
                return response.status(200).send(res);
            });
        }
        catch (error) {
            if (error.messages) {
                return response.badRequest(error.messages);
            }
            else {
                return response.status(500).send({ errors: [{ message: error.message }] });
            }
        }
    }
    async store({ request, response, auth: { user } }) {
        try {
            await user?.load('cargo');
            if (!user?.cargo.pedidos.criar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            await request
                .validate({
                schema: Validator_1.schema.create({
                    clienteId: Validator_1.schema.number([Validator_1.rules.exists({ table: 'clientes', column: 'id' })]),
                    observacoes: Validator_1.schema.string.optional(),
                }),
                messages: {
                    'clienteId.required': 'O cliente precisa ser informado',
                    'clienteId.exists': 'O cliente precisa ser informado',
                },
            })
                .then(async (data) => {
                await Caixa_1.default.findByOrFail('data', new Date()).then((caixa) => {
                    if (caixa.status === false) {
                        throw new Error('Caixa fechado');
                    }
                });
                await Pedido_1.default.create({
                    ...data,
                    status: 'Em aberto',
                    empresaId: user?.empresaId,
                    createdBy: user?.id,
                }).then(async (pedido) => {
                    await pedido.load('cliente');
                    await pedido.load('produtos');
                    response.status(200).send(pedido);
                });
            });
        }
        catch (error) {
            if (error.messages) {
                return response.status(500).send(error.messages);
            }
            else {
                return response.status(500).send({ errors: [{ message: error.message }] });
            }
        }
    }
    async update({ request, response, params, auth: { user } }) {
        try {
            await user?.load('cargo');
            if (!user?.cargo.pedidos.atualizar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            await request
                .validate({
                schema: Validator_1.schema.create({
                    clienteId: Validator_1.schema.number.optional([Validator_1.rules.exists({ table: 'clientes', column: 'id' })]),
                    empresaId: Validator_1.schema.number.optional([Validator_1.rules.exists({ table: 'empresas', column: 'id' })]),
                    observacoes: Validator_1.schema.string.optional(),
                }),
                messages: {
                    'clienteId.exists': 'O cliente precisa ser informado',
                    'empresaId.exists': 'A empresa precisa ser informada',
                },
            })
                .then(async (data) => {
                const { id } = params;
                await Pedido_1.default.findOrFail(id).then(async (pedido) => {
                    pedido.merge(data);
                    await pedido.save();
                    response.status(200);
                });
            });
        }
        catch (error) {
            if (error.messages) {
                return response.status(500).send(error.messages);
            }
            else {
                return response.status(500).send({ errors: [{ message: error.message }] });
            }
        }
    }
    async addAdicional({ response, request, params, auth: { user } }) {
        try {
            await user?.load('cargo');
            if (!user?.cargo.pedidos.criar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            await request
                .validate({
                schema: Validator_1.schema.create({
                    produtoId: Validator_1.schema.number([Validator_1.rules.exists({ table: 'produtos', column: 'id' })]),
                    quantidade: Validator_1.schema.number(),
                    desconto: Validator_1.schema.number.optional(),
                }),
                messages: {
                    produtoId: 'O produto precisa ser informado',
                    quantidade: 'A quantidade precisa ser informada',
                },
            })
                .then(async ({ produtoId, quantidade, desconto }) => {
                const { id } = params;
                await Pedido_1.default.findOrFail(id).then(async (pedido) => {
                    await pedido.related('produtos').attach({
                        [produtoId]: {
                            quantidade,
                            desconto,
                        },
                    });
                    await pedido.load('produtos');
                    await pedido.load('produtos', (query) => {
                        query.pivotColumns(['desconto', 'quantidade', 'id']);
                        query.preload('unidade');
                    });
                    const produtos = pedido.produtos.map((produto) => {
                        return {
                            quantidade: produto.$extras.pivot_quantidade,
                            desconto: produto.$extras.pivot_desconto,
                            pedidoId: produto.$extras.pivot_pedido_id,
                            produtoId: produto.$extras.pivot_produto_id,
                            id: produto.$extras.pivot_id,
                            produto: produto.serialize(),
                        };
                    });
                    return response.status(200).send(produtos);
                });
            });
        }
        catch (error) {
            if (error.messages) {
                return response.status(500).send(error.messages);
            }
            else {
                return response.status(500).send({ errors: [{ message: error.message }] });
            }
        }
    }
    async removeAdicional({ response, params, auth: { user } }) {
        try {
            const { id } = params;
            await user?.load('cargo');
            if (!user?.cargo.pedidos.criar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            await PedidoProduto_1.default.findOrFail(id).then(async (pedido) => {
                await pedido.delete();
                return response.status(200);
            });
        }
        catch (error) {
            return response.status(500).send({ errors: [{ message: error.message }] });
        }
    }
    async pagar({ response, request, params, auth: { user } }) {
        try {
            await user?.load('cargo');
            if (!user?.cargo.pedidos.criar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            await request
                .validate({
                schema: Validator_1.schema.create({
                    status: Validator_1.schema.enum(['Finalizado']),
                    valor: Validator_1.schema.number(),
                    pagamento: Validator_1.schema.array().members(Validator_1.schema.object().members({
                        formaPagamento: Validator_1.schema.enum(['dinheiro', 'credito', 'debito', 'pix']),
                        parcelas: Validator_1.schema.number(),
                        valor: Validator_1.schema.number(),
                    })),
                }),
                messages: {
                    'status.required': 'O status precisa ser informado',
                    'status.enum': 'O status precisa ser do tipo finalizado',
                    'valor.required': 'O valor precisa ser informado',
                    'pagamento.*.formaPagamento.required': 'A forma de pagamento precisa ser informada',
                    'pagamento.*.formaPagamento.enum': 'As formas de pagamento precisam ser uma das seguintes: dinheiro, credito, debito ou pix',
                    'pagamento.*.parcelas.required': 'As parcelas precisam ser informadas',
                    'pagamento.*.valor.required': 'O valor precisa ser informado',
                },
            })
                .then(async ({ status, valor, pagamento }) => {
                const { id } = params;
                await Pedido_1.default.findOrFail(id).then(async (pedido) => {
                    pedido.merge({ status, valor, entrega: luxon_1.DateTime.now() });
                    await pedido.save();
                    await pedido.related('pagamento').createMany(pagamento);
                    await Movimentacao_1.default.create({
                        empresaId: user?.empresaId,
                        createdBy: user?.id,
                        descricao: `Pedido nº ${pedido.id}`,
                        valor: pedido.valor,
                        tipo: 'entrada',
                        origem: 'pedidos',
                    });
                    await Receber_1.default.create({
                        clienteId: pedido.clienteId,
                        empresaId: user?.empresaId,
                        createdBy: user?.id,
                        valor: pedido.valor,
                        status: 'pago',
                    }).then(async (receber) => {
                        let parcelas = [];
                        pagamento.forEach((element) => {
                            Array.from({ length: element.parcelas }, (_, index) => {
                                const valorParcela = Math.round((element.valor / element.parcelas + Number.EPSILON) * 100) / 100;
                                parcelas.push({
                                    valor: valorParcela,
                                    parcela: index + 1,
                                    vencimento: element.formaPagamento === 'credito'
                                        ? luxon_1.DateTime.now().plus({ months: index + 1 })
                                        : luxon_1.DateTime.now(),
                                    status: true,
                                    createdBy: user?.id,
                                    updatedBy: user?.id,
                                });
                            });
                        });
                        await receber.related('parcelas').createMany(parcelas);
                        return response.status(200);
                    });
                });
            });
        }
        catch (error) {
            if (error.messages) {
                return response.status(500).send(error.messages);
            }
            else {
                return response.status(500).send({ errors: [{ message: error.message }] });
            }
        }
    }
}
exports.default = PedidosController;
//# sourceMappingURL=PedidosController.js.map