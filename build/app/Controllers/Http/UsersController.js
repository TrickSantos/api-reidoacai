"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const Users_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Users"));
class UsersController {
    async index({ response, auth: { user } }) {
        try {
            await user?.load('cargo');
            if (!user?.cargo.usuarios.visualizar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            await Users_1.default.query()
                .where((builder) => {
                if (user) {
                    builder.where('empresa_id', user.empresaId);
                }
            })
                .preload('cargo')
                .then((users) => response.status(200).send(users));
        }
        catch (error) {
            console.log(error.message);
            return response.status(500).send({ errors: [{ message: error.message }] });
        }
    }
    async store({ request, response, auth: { user } }) {
        try {
            await user?.load('cargo');
            if (!user?.cargo.usuarios.criar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            await request
                .validate({
                schema: Validator_1.schema.create({
                    email: Validator_1.schema.string({ trim: true }, [
                        Validator_1.rules.email(),
                        Validator_1.rules.unique({ table: 'users', column: 'email' }),
                    ]),
                    cargoId: Validator_1.schema.number([
                        Validator_1.rules.exists({
                            column: 'id',
                            table: 'cargos',
                            where: {
                                empresa_id: user?.empresaId,
                            },
                        }),
                    ]),
                    password: Validator_1.schema.string(),
                    nome: Validator_1.schema.string(),
                    cpf: Validator_1.schema.string({}, [Validator_1.rules.unique({ table: 'users', column: 'cpf' })]),
                }),
                messages: {
                    'email.required': 'O email precisa ser informado',
                    'email.email': 'O email precisa ser válido',
                    'password.required': 'A senha precisa ser informada',
                    'nome.required': 'O nome precisa ser informado',
                    'cpf.required': 'O CPF precisa ser informado',
                    'cargoId.exists': 'O cargo não foi encontrado',
                },
            })
                .then(async (data) => {
                await Users_1.default.create({ ...data, empresaId: user?.empresaId }).then((user) => response.status(200).send(user));
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
            if (!user?.cargo.usuarios.atualizar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            await request
                .validate({
                schema: Validator_1.schema.create({
                    empresaId: Validator_1.schema.number.optional([
                        Validator_1.rules.exists({
                            column: 'id',
                            table: 'users',
                        }),
                    ]),
                    email: Validator_1.schema.string.optional({ trim: true }, [
                        Validator_1.rules.email(),
                        Validator_1.rules.unique({ table: 'users', column: 'email' }),
                    ]),
                    password: Validator_1.schema.string.optional(),
                    nome: Validator_1.schema.string.optional(),
                    cpf: Validator_1.schema.string.optional({}, [
                        Validator_1.rules.unique({ table: 'users', column: 'cpf', whereNot: { id: params.id } }),
                    ]),
                    cargoId: Validator_1.schema.number.optional([
                        Validator_1.rules.exists({
                            column: 'id',
                            table: 'cargos',
                            where: {
                                empresa_id: user?.empresaId,
                            },
                        }),
                    ]),
                    image: Validator_1.schema.file.optional({ size: '10mb', extnames: ['jpg', 'png'] }),
                }),
                messages: {
                    'empresaId.required': 'A empresa precisa ser informada',
                    'empresaId.exists': 'Empresa não encontrada',
                    'email.required': 'O email precisa ser informado',
                    'email.email': 'O email precisa ser válido',
                    'password.required': 'A senha precisa ser informada',
                    'nome.required': 'O nome precisa ser informado',
                    'cpf.required': 'O CPF precisa ser informado',
                    'cargoId.exists': 'O cargo não foi encontrado',
                    'image.file.extnames': 'A imagem precisa estar em um formato permitido',
                    'image.file.size': 'A imagem precisa ser menor que 10mb',
                },
            })
                .then(async (data) => {
                const { id } = params;
                await Users_1.default.findOrFail(id).then(async (user) => {
                    user.merge({ ...data });
                    await user.save();
                    response.status(200).send(user);
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
    async destroy({ response, params, auth: { user } }) {
        try {
            await user?.load('cargo');
            if (!user?.cargo.usuarios.apagar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            const { id } = params;
            await Users_1.default.findOrFail(id).then(async (user) => {
                await user.delete();
                return response.status(200);
            });
        }
        catch (error) {
            return response.status(500).send({ errors: [{ message: error.message }] });
        }
    }
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map