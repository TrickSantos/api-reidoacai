"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Caixas extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'caixas';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('empresa_id').unsigned().references('empresas.id').onDelete('cascade');
            table.date('data');
            table.decimal('valor').defaultTo(0);
            table.boolean('status').defaultTo(true).comment('true = aberto, false = fechado');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Caixas;
//# sourceMappingURL=1626128387715_caixas.js.map