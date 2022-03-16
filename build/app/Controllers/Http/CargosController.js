"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const Cargo_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Cargo"));
class CargosController {
    async index({ response, auth: { user } }) {
        try {
            await user?.load('cargo');
            if (!user?.cargo.cargos.visualizar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            await Cargo_1.default.query()
                .where({ empresaId: user?.empresaId })
                .then((cargos) => response.status(200).send(cargos));
        }
        catch (error) {
            console.log(error);
            return response.status(500).send({ errors: [{ message: error.message }] });
        }
    }
    async store({ request, response, auth: { user } }) {
        try {
            await user?.load('cargo');
            if (!user?.cargo.cargos.criar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            await request
                .validate({
                schema: Validator_1.schema.create({
                    nome: Validator_1.schema.string(),
                    pdv: Validator_1.schema.object.optional().members({
                        criar: Validator_1.schema.boolean(),
                        visualizar: Validator_1.schema.boolean(),
                        atualizar: Validator_1.schema.boolean(),
                        apagar: Validator_1.schema.boolean(),
                    }),
                    pedidos: Validator_1.schema.object.optional().members({
                        criar: Validator_1.schema.boolean(),
                        visualizar: Validator_1.schema.boolean(),
                        atualizar: Validator_1.schema.boolean(),
                        apagar: Validator_1.schema.boolean(),
                    }),
                    produtos: Validator_1.schema.object.optional().members({
                        criar: Validator_1.schema.boolean(),
                        visualizar: Validator_1.schema.boolean(),
                        atualizar: Validator_1.schema.boolean(),
                        apagar: Validator_1.schema.boolean(),
                    }),
                    estoque: Validator_1.schema.object.optional().members({
                        criar: Validator_1.schema.boolean(),
                        visualizar: Validator_1.schema.boolean(),
                        atualizar: Validator_1.schema.boolean(),
                        apagar: Validator_1.schema.boolean(),
                    }),
                    clientes: Validator_1.schema.object.optional().members({
                        criar: Validator_1.schema.boolean(),
                        visualizar: Validator_1.schema.boolean(),
                        atualizar: Validator_1.schema.boolean(),
                        apagar: Validator_1.schema.boolean(),
                    }),
                    fornecedores: Validator_1.schema.object.optional().members({
                        criar: Validator_1.schema.boolean(),
                        visualizar: Validator_1.schema.boolean(),
                        atualizar: Validator_1.schema.boolean(),
                        apagar: Validator_1.schema.boolean(),
                    }),
                    unidades: Validator_1.schema.object.optional().members({
                        criar: Validator_1.schema.boolean(),
                        visualizar: Validator_1.schema.boolean(),
                        atualizar: Validator_1.schema.boolean(),
                        apagar: Validator_1.schema.boolean(),
                    }),
                    aPagar: Validator_1.schema.object.optional().members({
                        criar: Validator_1.schema.boolean(),
                        visualizar: Validator_1.schema.boolean(),
                        atualizar: Validator_1.schema.boolean(),
                        apagar: Validator_1.schema.boolean(),
                    }),
                    aReceber: Validator_1.schema.object.optional().members({
                        criar: Validator_1.schema.boolean(),
                        visualizar: Validator_1.schema.boolean(),
                        atualizar: Validator_1.schema.boolean(),
                        apagar: Validator_1.schema.boolean(),
                    }),
                    caixa: Validator_1.schema.object.optional().members({
                        criar: Validator_1.schema.boolean(),
                        visualizar: Validator_1.schema.boolean(),
                        atualizar: Validator_1.schema.boolean(),
                        apagar: Validator_1.schema.boolean(),
                    }),
                    empresas: Validator_1.schema.object.optional().members({
                        criar: Validator_1.schema.boolean(),
                        visualizar: Validator_1.schema.boolean(),
                        atualizar: Validator_1.schema.boolean(),
                        apagar: Validator_1.schema.boolean(),
                    }),
                    usuarios: Validator_1.schema.object.optional().members({
                        criar: Validator_1.schema.boolean(),
                        visualizar: Validator_1.schema.boolean(),
                        atualizar: Validator_1.schema.boolean(),
                        apagar: Validator_1.schema.boolean(),
                    }),
                    cargos: Validator_1.schema.object.optional().members({
                        criar: Validator_1.schema.boolean(),
                        visualizar: Validator_1.schema.boolean(),
                        atualizar: Validator_1.schema.boolean(),
                        apagar: Validator_1.schema.boolean(),
                    }),
                }),
                messages: {
                    'nome.required': 'O nome do cargo precisa ser informado',
                },
            })
                .then(async (data) => {
                await Cargo_1.default.create({ ...data, empresaId: user?.empresaId, createdBy: user?.id }).then((cargo) => response.status(200).send(cargo));
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
            if (!user?.cargo.cargos.atualizar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            await request
                .validate({
                schema: Validator_1.schema.create({
                    nome: Validator_1.schema.string.optional(),
                    pdv: Validator_1.schema.object.optional().members({
                        criar: Validator_1.schema.boolean(),
                        visualizar: Validator_1.schema.boolean(),
                        atualizar: Validator_1.schema.boolean(),
                        apagar: Validator_1.schema.boolean(),
                    }),
                    pedidos: Validator_1.schema.object.optional().members({
                        criar: Validator_1.schema.boolean(),
                        visualizar: Validator_1.schema.boolean(),
                        atualizar: Validator_1.schema.boolean(),
                        apagar: Validator_1.schema.boolean(),
                    }),
                    produtos: Validator_1.schema.object.optional().members({
                        criar: Validator_1.schema.boolean(),
                        visualizar: Validator_1.schema.boolean(),
                        atualizar: Validator_1.schema.boolean(),
                        apagar: Validator_1.schema.boolean(),
                    }),
                    estoque: Validator_1.schema.object.optional().members({
                        criar: Validator_1.schema.boolean(),
                        visualizar: Validator_1.schema.boolean(),
                        atualizar: Validator_1.schema.boolean(),
                        apagar: Validator_1.schema.boolean(),
                    }),
                    clientes: Validator_1.schema.object.optional().members({
                        criar: Validator_1.schema.boolean(),
                        visualizar: Validator_1.schema.boolean(),
                        atualizar: Validator_1.schema.boolean(),
                        apagar: Validator_1.schema.boolean(),
                    }),
                    fornecedores: Validator_1.schema.object.optional().members({
                        criar: Validator_1.schema.boolean(),
                        visualizar: Validator_1.schema.boolean(),
                        atualizar: Validator_1.schema.boolean(),
                        apagar: Validator_1.schema.boolean(),
                    }),
                    unidades: Validator_1.schema.object.optional().members({
                        criar: Validator_1.schema.boolean(),
                        visualizar: Validator_1.schema.boolean(),
                        atualizar: Validator_1.schema.boolean(),
                        apagar: Validator_1.schema.boolean(),
                    }),
                    aPagar: Validator_1.schema.object.optional().members({
                        criar: Validator_1.schema.boolean(),
                        visualizar: Validator_1.schema.boolean(),
                        atualizar: Validator_1.schema.boolean(),
                        apagar: Validator_1.schema.boolean(),
                    }),
                    aReceber: Validator_1.schema.object.optional().members({
                        criar: Validator_1.schema.boolean(),
                        visualizar: Validator_1.schema.boolean(),
                        atualizar: Validator_1.schema.boolean(),
                        apagar: Validator_1.schema.boolean(),
                    }),
                    caixa: Validator_1.schema.object.optional().members({
                        criar: Validator_1.schema.boolean(),
                        visualizar: Validator_1.schema.boolean(),
                        atualizar: Validator_1.schema.boolean(),
                        apagar: Validator_1.schema.boolean(),
                    }),
                    empresas: Validator_1.schema.object.optional().members({
                        criar: Validator_1.schema.boolean(),
                        visualizar: Validator_1.schema.boolean(),
                        atualizar: Validator_1.schema.boolean(),
                        apagar: Validator_1.schema.boolean(),
                    }),
                    usuarios: Validator_1.schema.object.optional().members({
                        criar: Validator_1.schema.boolean(),
                        visualizar: Validator_1.schema.boolean(),
                        atualizar: Validator_1.schema.boolean(),
                        apagar: Validator_1.schema.boolean(),
                    }),
                    cargos: Validator_1.schema.object().members({
                        criar: Validator_1.schema.boolean(),
                        visualizar: Validator_1.schema.boolean(),
                        atualizar: Validator_1.schema.boolean(),
                        apagar: Validator_1.schema.boolean(),
                    }),
                }),
                messages: {
                    nome: 'O nome do cargo precisa ser informado',
                },
            })
                .then(async (data) => {
                const { id } = params;
                await Cargo_1.default.findOrFail(id).then(async (cargo) => {
                    cargo.merge({ ...data, empresaId: user?.empresaId });
                    await cargo.save();
                    return response.status(200).send(cargo);
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
            const { id } = params;
            await user?.load('cargo');
            if (!user?.cargo.cargos.apagar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            await Cargo_1.default.findOrFail(id).then(async (cargo) => {
                await cargo.delete();
                return response.status(200);
            });
        }
        catch (error) {
            return response.status(500).send({ errors: [{ message: error.message }] });
        }
    }
}
exports.default = CargosController;
//# sourceMappingURL=CargosController.js.map