"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class PedidoPagamentos extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'pedido_pagamentos';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('pedido_id').unsigned().references('pedidos.id').onDelete('cascade');
            table.enum('forma_pagamento', ['dinheiro', 'credito', 'debito', 'pix']).notNullable();
            table.integer('parcelas').defaultTo(1);
            table.decimal('valor').defaultTo(0);
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = PedidoPagamentos;
//# sourceMappingURL=1624480772625_pedido_pagamentos.js.map