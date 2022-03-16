"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
const base = {
    criar: true,
    visualizar: true,
    atualizar: true,
    apagar: true,
};
class Cargos extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'cargos';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('empresa_id').unsigned().references('empresas.id');
            table.integer('created_by').unsigned().references('users.id').onDelete('cascade');
            table.string('nome');
            table.json('pedidos').defaultTo(JSON.stringify(base));
            table.json('produtos').defaultTo(JSON.stringify(base));
            table.json('estoque').defaultTo(JSON.stringify(base));
            table.json('clientes').defaultTo(JSON.stringify(base));
            table.json('unidades').defaultTo(JSON.stringify(base));
            table.json('fornecedores').defaultTo(JSON.stringify(base));
            table.json('a_pagar').defaultTo(JSON.stringify(base));
            table.json('a_receber').defaultTo(JSON.stringify(base));
            table.json('caixa').defaultTo(JSON.stringify(base));
            table.json('empresas').defaultTo(JSON.stringify(base));
            table.json('usuarios').defaultTo(JSON.stringify(base));
            table.json('cargos').defaultTo(JSON.stringify(base));
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Cargos;
//# sourceMappingURL=1626207034763_cargos.js.map