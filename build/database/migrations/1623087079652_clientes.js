"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Clientes extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'clientes';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('empresa_id').unsigned().references('empresas.id').onDelete('cascade');
            table.string('nome');
            table.string('telefone');
            table.string('email');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Clientes;
//# sourceMappingURL=1623087079652_clientes.js.map