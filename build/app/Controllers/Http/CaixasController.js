"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const Movimentacao_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Movimentacao"));
const Caixa_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Caixa"));
const luxon_1 = require("luxon");
class CaixasController {
    async index({ response, request, auth: { user } }) {
        const { tipo, data } = request.all();
        try {
            await user?.load('cargo');
            if (!user?.cargo.caixa.visualizar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            const movimentacao = await Movimentacao_1.default.query().where((builder) => {
                if (tipo) {
                    builder.where({ tipo });
                }
                if (data) {
                    let parse = luxon_1.DateTime.fromFormat(data, 'yyyy-MM-dd');
                    builder.whereRaw(`data::date = '${parse.toSQLDate()}'`);
                }
                builder.where({ empresaId: user?.empresaId });
            });
            return response.status(200).send(movimentacao);
        }
        catch (error) {
            console.log(error);
            return response
                .status(500)
                .send({ errors: [{ message: 'Erro ao encontrar movimentações, tente novamente' }] });
        }
    }
    async store({ response, request, auth: { user } }) {
        try {
            await user?.load('cargo');
            if (!user?.cargo.caixa.criar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            await request
                .validate({
                schema: Validator_1.schema.create({
                    descricao: Validator_1.schema.string(),
                    valor: Validator_1.schema.number(),
                    tipo: Validator_1.schema.enum(['entrada', 'saida']),
                    origem: Validator_1.schema.enum(['pedidos', 'outros']),
                }),
                messages: {
                    'descricao': 'A descrição precisa ser informada',
                    'valor': 'O valor precisa ser informado',
                    'tipo.enum': 'O tipo precisa ser Entrada ou Saída',
                    'tipo.required': 'O tipo precisa ser informado',
                    'origem': 'A origem precisa ser informada',
                },
            })
                .then(async (data) => {
                await Caixa_1.default.findByOrFail('data', new Date()).then((caixa) => {
                    if (caixa.status === false) {
                        throw new Error('Caixa fechado');
                    }
                });
                const movimentacao = await Movimentacao_1.default.create({
                    ...data,
                    empresaId: user?.empresaId,
                    createdBy: user.id,
                });
                return response.status(200).send(movimentacao);
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
    async fecharCaixa({ response, request, params, auth: { user } }) {
        try {
            const { id } = params;
            await user?.load('cargo');
            if (!user?.cargo.caixa.atualizar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            await request
                .validate({
                schema: Validator_1.schema.create({
                    valor: Validator_1.schema.number(),
                }),
                messages: {
                    valor: 'O valor precisa ser informado',
                },
            })
                .then(async (data) => {
                await Caixa_1.default.findOrFail(id).then(async (caixa) => {
                    caixa.merge({ ...data, empresaId: user?.empresaId, status: false });
                    await caixa.save();
                    return response.status(200).send(caixa);
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
    async abrirCaixa({ response, auth: { user } }) {
        try {
            await user?.load('cargo');
            if (!user?.cargo.caixa.criar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada' }] });
            }
            await Caixa_1.default.create({
                empresaId: user?.empresaId,
                data: luxon_1.DateTime.now(),
                valor: 0,
                status: true,
            }).then((caixa) => response.status(200).send(caixa));
        }
        catch (error) {
            return response.status(500).send({ errors: [{ message: error.message }] });
        }
    }
    async reabrirCaixa({ response, params, auth: { user } }) {
        try {
            await user?.load('cargo');
            if (!user?.cargo.caixa.atualizar) {
                return response.status(403).send({ errors: [{ message: 'Permissão negada!' }] });
            }
            const { id } = params;
            await Caixa_1.default.findOrFail(id).then(async (caixa) => {
                caixa.merge({
                    status: true,
                });
                await caixa.save();
                return response.status(200).send(caixa);
            });
        }
        catch (error) {
            return response.status(500).send({ errors: [{ message: error.message }] });
        }
    }
    async verificarCaixa({ response, request, auth: { user } }) {
        try {
            const { data } = request.all();
            await Caixa_1.default.query()
                .where((builder) => {
                const parse = luxon_1.DateTime.fromFormat(data, 'yyyy-MM-dd');
                builder.whereRaw(`data::date = '${parse.toSQLDate()}'`);
                builder.where({ empresaId: user?.empresaId });
            })
                .then((caixa) => response.status(200).send(caixa[0]));
        }
        catch (error) {
            return response.status(500).send({ errors: [{ message: error.message }] });
        }
    }
}
exports.default = CaixasController;
//# sourceMappingURL=CaixasController.js.map