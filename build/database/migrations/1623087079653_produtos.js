"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Produtos extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'produtos';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary();
            table
                .integer('empresa_id')
                .unsigned()
                .references('empresas.id')
                .onDelete('cascade')
                .notNullable();
            table.integer('unidade_id').unsigned().references('unidades.id').notNullable();
            table.string('nome').notNullable();
            table.string('descricao');
            table.decimal('valor').notNullable();
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Produtos;
//# sourceMappingURL=1623087079653_produtos.js.map