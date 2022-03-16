"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Empresas extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'empresas';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('razao_social').unique();
            table.string('nome_fantasia').unique();
            table.string('cnpj_cpf').unique();
            table.string('email').unique();
            table.string('telefone');
            table.string('endereco');
            table.boolean('status').defaultTo(true);
            table.enum('plano', ['Admin', 'Basico']).defaultTo('Basico');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Empresas;
//# sourceMappingURL=1623076031988_empresas.js.map