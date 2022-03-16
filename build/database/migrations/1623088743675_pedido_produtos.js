"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class PedidoProdutos extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'pedido_produtos';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table
                .integer('pedido_id')
                .unsigned()
                .references('pedidos.id')
                .onDelete('cascade')
                .notNullable();
            table.integer('produto_id').unsigned().references('produtos.id').notNullable();
            table.integer('quantidade').defaultTo(0);
            table.decimal('desconto').defaultTo(0);
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = PedidoProdutos;
//# sourceMappingURL=1623088743675_pedido_produtos.js.map