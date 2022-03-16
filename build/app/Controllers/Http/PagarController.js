"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const Fornecedor_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Fornecedor"));
const Pagar_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Pagar"));
const PagarParcelado_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/PagarParcelado"));
const luxon_1 = require("luxon");
class PagarController {
    async index({ response, auth: { user } }) {
        await user?.load('cargo');
        if (!user?.cargo.aPagar.visualizar) {
            return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
        }
        try {
            await Fornecedor_1.default.query()
                .where((builder) => {
                if (user) {
                    builder.where({ empresaId: user.empresaId });
                }
            })
                .has('pagar')
                .preload('pagar', (query) => query.preload('parcelas'))
                .then((clientes) => response.status(200).send(clientes));
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
    async store({ response, request, auth: { user } }) {
        try {
            await user?.load('cargo');
            if (!user?.cargo.aPagar.criar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            await request
                .validate({
                schema: Validator_1.schema.create({
                    fornecedorId: Validator_1.schema.number([Validator_1.rules.exists({ column: 'id', table: 'fornecedores' })]),
                    valor: Validator_1.schema.number(),
                    parcelas: Validator_1.schema.array().members(Validator_1.schema.object().members({
                        valor: Validator_1.schema.number(),
                        vencimento: Validator_1.schema.date(),
                        parcela: Validator_1.schema.number(),
                    })),
                }),
                messages: {
                    'fornecedorId.required': 'O cliente precisa ser informado',
                    'fornecedorId.exists': 'Cliente não encontrado',
                    'valor.required': 'O valor precisa ser informado',
                    'parcelas.*.valor.required': 'O valor precisa ser informado',
                    'parcelas.*.vencimento.required': 'O vencimento precisa ser informado',
                    'parcelas.*.parcela.required': 'A parcela precisa ser informada',
                },
            })
                .then(async ({ parcelas, ...data }) => {
                await Pagar_1.default.create({ ...data, empresaId: user?.empresaId, createdBy: user?.id }).then(async (receber) => {
                    await receber.related('parcelas').createMany(parcelas.map((parcela) => ({
                        ...parcela,
                        createdBy: user?.id,
                        updatedBy: user?.id,
                    })));
                    return response.status(200);
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
    async darBaixa({ params, response, auth: { user } }) {
        try {
            const { id } = params;
            await user?.load('cargo');
            if (!user?.cargo.aPagar.atualizar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            await PagarParcelado_1.default.findOrFail(id).then(async (parcela) => {
                parcela.merge({
                    status: true,
                    pagamento: luxon_1.DateTime.now(),
                    updatedBy: user?.id,
                });
                await parcela.save();
                await parcela.load('pagar', (query) => {
                    query.preload('fornecedor', (query) => {
                        query.preload('pagar', (query) => {
                            query.preload('parcelas');
                        });
                    });
                });
                return response.status(200).send(parcela.pagar.fornecedor);
            });
        }
        catch (error) {
            return response.status(500).send({ errors: [{ message: error.message }] });
        }
    }
}
exports.default = PagarController;
//# sourceMappingURL=PagarController.js.map