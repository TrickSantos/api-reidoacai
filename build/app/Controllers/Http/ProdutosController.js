"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const Produto_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Produto"));
class ProdutosController {
    async index({ response, auth }) {
        const { user } = auth;
        try {
            await Produto_1.default.query()
                .where((builder) => {
                if (user) {
                    builder.where({ empresaId: user.empresaId });
                }
            })
                .preload('unidade')
                .then((produtos) => response.status(200).send(produtos));
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
    async store({ request, response, auth }) {
        try {
            await request
                .validate({
                schema: Validator_1.schema.create({
                    unidadeId: Validator_1.schema.number([Validator_1.rules.exists({ table: 'unidades', column: 'id' })]),
                    nome: Validator_1.schema.string(),
                    descricao: Validator_1.schema.string(),
                    valor: Validator_1.schema.number(),
                }),
                messages: {
                    'nome.required': 'O produto precisa ser informado',
                    'descricao.required': 'A descrição do produto precisa ser informada',
                    'unidadeId.required': 'A unidade precisa ser informada',
                    'valor.required': 'O valor precisa ser informado',
                },
            })
                .then(async (data) => {
                await Produto_1.default.create({ ...data, empresaId: auth.user?.empresaId }).then((produto) => response.status(200).send(produto));
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
    async update({ params, request, response }) {
        try {
            await request
                .validate({
                schema: Validator_1.schema.create({
                    unidadeId: Validator_1.schema.number.optional([Validator_1.rules.exists({ table: 'unidades', column: 'id' })]),
                    nome: Validator_1.schema.string.optional(),
                    descricao: Validator_1.schema.string.optional(),
                    valor: Validator_1.schema.number.optional(),
                }),
                messages: {
                    'unidadeId.exists': 'A unidade precisa ser informada',
                },
            })
                .then(async (data) => {
                const { id } = params;
                await Produto_1.default.findOrFail(id).then(async (produto) => {
                    produto.merge(data);
                    await produto.save();
                    return response.status(200).send(produto);
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
    async destroy({ params, response }) {
        try {
            const { id } = params;
            await Produto_1.default.findOrFail(id).then(async (produto) => {
                await produto.delete();
                return response.status(200);
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
exports.default = ProdutosController;
//# sourceMappingURL=ProdutosController.js.map