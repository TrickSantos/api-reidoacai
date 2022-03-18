"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Database"));
const luxon_1 = require("luxon");
class DashboardController {
    async index({ response, auth: { user } }) {
        try {
            if (!user) {
                return response.status(401);
            }
            const data = await Database_1.default.rawQuery("select tipo, date_trunc('month', data) as mes, sum(valor) as total " +
                'from movimentacoes where empresa_id = :empresaId group by mes, tipo order by mes desc, tipo', { empresaId: user.empresaId });
            const res = data.rows.map((row) => {
                return {
                    mes: luxon_1.DateTime.fromMillis(Date.parse(row.mes)).setLocale('pt-BR').toFormat('LLLL'),
                    ano: luxon_1.DateTime.fromMillis(Date.parse(row.mes)).setLocale('pt-BR').toFormat('yyyy'),
                    total: Number(row.total),
                    tipo: row.tipo,
                };
            });
            return response.send(res);
        }
        catch (error) {
            if (error.messages) {
                return response.status(500).send(error.messages);
            }
            else {
                console.log(error);
                return response.status(500).send({ errors: [{ message: error.message }] });
            }
        }
    }
}
exports.default = DashboardController;
//# sourceMappingURL=DashboardController.js.map