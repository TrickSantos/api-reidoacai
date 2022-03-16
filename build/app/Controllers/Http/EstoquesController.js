"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const Estoque_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Estoque"));
class EstoquesController {
    async index({ response, auth: { user } }) {
        try {
            await user?.load('cargo');
            if (!user?.cargo.estoque.visualizar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            await Estoque_1.default.query()
                .where((builder) => {
                if (user) {
                    builder.where({ empresaId: user.empresaId });
                }
            })
                .then((estoques) => response.status(200).send(estoques));
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
    async store({ request, response, auth: { user } }) {
        try {
            await user?.load('cargo');
            if (!user?.cargo.estoque.criar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            await request
                .validate({
                schema: Validator_1.schema.create({
                    empresaId: Validator_1.schema.number([Validator_1.rules.exists({ table: 'empresas', column: 'id' })]),
                    produtoId: Validator_1.schema.number([Validator_1.rules.exists({ table: 'produtos', column: 'id' })]),
                    quantidade: Validator_1.schema.number(),
                    tipo: Validator_1.schema.enum(['entrada', 'saida']),
                }),
                messages: {
                    'empresaId.required': 'A empresa precisa ser informada',
                    'empresaId.exists': 'A empresa precisa ser informada',
                    'produtoId.required': 'O produto precisa ser informado',
                    'produtoId.exists': 'O produto precisa ser informado',
                    'quantidade.required': 'A quantidade precisa ser informada',
                    'tipo.required': 'O tipo precisa ser informado',
                    'tipo.enum': 'O tipo precisa ser informado',
                },
            })
                .then(async (data) => {
                await Estoque_1.default.create({ ...data, empresaId: user?.empresaId, createdBy: user?.id }).then((estoque) => response.status(200).send(estoque));
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
            if (!user?.cargo.estoque.atualizar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            await request
                .validate({
                schema: Validator_1.schema.create({
                    empresaId: Validator_1.schema.number.optional([Validator_1.rules.exists({ table: 'empresas', column: 'id' })]),
                    produtoId: Validator_1.schema.number.optional([Validator_1.rules.exists({ table: 'produtos', column: 'id' })]),
                    quantidade: Validator_1.schema.number.optional(),
                    tipo: Validator_1.schema.enum(['entrada', 'saida']),
                }),
                messages: {
                    'empresaId.required': 'A empresa precisa ser informada',
                    'empresaId.exists': 'A empresa precisa ser informada',
                    'produtoId.required': 'O produto precisa ser informado',
                    'produtoId.exists': 'O produto precisa ser informado',
                    'quantidade.required': 'A quantidade precisa ser informada',
                    'tipo.required': 'O tipo precisa ser informado',
                    'tipo.enum': 'O tipo precisa ser informado',
                },
            })
                .then(async (data) => {
                await Estoque_1.default.findOrFail(params.id).then(async (estoque) => {
                    await estoque
                        .merge(data)
                        .save()
                        .then((estoque) => response.status(200).send(estoque));
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
    async destroy({ params, response, auth: { user } }) {
        try {
            await user?.load('cargo');
            if (!user?.cargo.estoque.apagar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            await Estoque_1.default.findOrFail(params.id).then(async (estoque) => {
                await estoque
                    .delete()
                    .then(() => response.status(200).send({ message: 'Estoque deletado com sucesso' }));
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
exports.default = EstoquesController;
//# sourceMappingURL=EstoquesController.js.map