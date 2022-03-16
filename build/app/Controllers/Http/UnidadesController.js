"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const Unidade_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Unidade"));
class UnidadesController {
    async index({ response, auth: { user } }) {
        await user?.load('cargo');
        if (!user?.cargo.unidades.visualizar) {
            return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
        }
        try {
            await Unidade_1.default.query()
                .where((builder) => {
                if (user) {
                    builder.where({ empresaId: user.empresaId });
                }
            })
                .orderBy('unidade', 'asc')
                .then((unidades) => response.status(200).send(unidades));
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
            if (!user?.cargo.unidades.criar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            await request
                .validate({
                schema: Validator_1.schema.create({
                    unidade: Validator_1.schema.string(),
                    nomenclatura: Validator_1.schema.string(),
                }),
                messages: {
                    'unidade.required': 'O nome precisa ser informado',
                    'nomenclatura.required': 'A nomenclatura precisa ser informada',
                },
            })
                .then(async (data) => {
                await Unidade_1.default.create({ ...data, empresaId: user?.empresaId }).then((unidade) => response.status(200).send(unidade));
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
        try {
            await user?.load('cargo');
            if (!user?.cargo.unidades.atualizar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            await request
                .validate({
                schema: Validator_1.schema.create({
                    unidade: Validator_1.schema.string.optional(),
                    nomenclatura: Validator_1.schema.string.optional(),
                }),
            })
                .then(async (data) => {
                const { id } = params;
                await Unidade_1.default.findOrFail(id).then(async (unidade) => {
                    unidade.merge(data);
                    await unidade.save();
                    return response.status(200).send(unidade);
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
            if (!user?.cargo.unidades.apagar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            const { id } = params;
            await Unidade_1.default.findOrFail(id).then(async (unidade) => {
                await unidade.delete();
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
exports.default = UnidadesController;
//# sourceMappingURL=UnidadesController.js.map