"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const Cliente_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Cliente"));
class ClientesController {
    async index({ response, auth: { user } }) {
        try {
            await user?.load('cargo');
            if (!user?.cargo.clientes.visualizar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            await Cliente_1.default.query()
                .where((builder) => {
                if (user) {
                    builder.where({ empresaId: user.empresaId });
                }
            })
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
    async store({ request, response, auth: { user } }) {
        try {
            await user?.load('cargo');
            if (!user?.cargo.clientes.criar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            await request
                .validate({
                schema: Validator_1.schema.create({
                    nome: Validator_1.schema.string(),
                    email: Validator_1.schema.string({}, [
                        Validator_1.rules.email(),
                        Validator_1.rules.unique({ table: 'clientes', column: 'email' }),
                    ]),
                    telefone: Validator_1.schema.string.optional({}, [Validator_1.rules.mobile({ locales: ['pt-BR'] })]),
                }),
                messages: {
                    'nome.required': 'O nome precisa ser informado',
                    'email.required': 'O email precisa ser informado',
                    'email.email': 'O email precisa estar em um formato válido',
                    'email.unique': 'O email já está em uso, informe outro email',
                    'telefone.mobile': 'O telefone precisa estar em um formato válido',
                },
            })
                .then(async (data) => {
                await Cliente_1.default.create({ ...data, empresaId: user?.empresaId }).then((cliente) => response.status(200).send(cliente));
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
    async update({ params, request, response, auth: { user } }) {
        const { id } = params;
        try {
            await user?.load('cargo');
            if (!user?.cargo.clientes.atualizar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            await request
                .validate({
                schema: Validator_1.schema.create({
                    nome: Validator_1.schema.string.optional(),
                    email: Validator_1.schema.string.optional({}, [
                        Validator_1.rules.email(),
                        Validator_1.rules.unique({ table: 'clientes', column: 'email', whereNot: { id: id } }),
                    ]),
                    telefone: Validator_1.schema.string.optional({}, [Validator_1.rules.mobile({ locales: ['pt-BR'] })]),
                }),
                messages: {
                    'nome.required': 'O nome precisa ser informado',
                    'email.email': 'O email precisa estar em um formato válido',
                    'email.unique': 'O email já está em uso, informe outro email',
                    'telefone.mobile': 'O telefone precisa estar em um formato válido',
                },
            })
                .then(async (data) => {
                await Cliente_1.default.findOrFail(id).then(async (cliente) => {
                    cliente.merge(data);
                    await cliente.save();
                    return response.status(200).send(cliente);
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
            const { id } = params;
            await user?.load('cargo');
            if (!user?.cargo.clientes.apagar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            await Cliente_1.default.findOrFail(id).then(async (cliente) => {
                await cliente.delete();
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
exports.default = ClientesController;
//# sourceMappingURL=ClientesController.js.map