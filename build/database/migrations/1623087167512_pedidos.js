"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Pedidos extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'pedidos';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table
                .integer('cliente_id')
                .unsigned()
                .references('clientes.id')
                .onDelete('cascade')
                .notNullable();
            table
                .integer('empresa_id')
                .unsigned()
                .references('empresas.id')
                .onDelete('cascade')
                .notNullable();
            table
                .integer('created_by')
                .unsigned()
                .references('users.id')
                .onDelete('cascade')
                .notNullable();
            table.text('observacoes');
            table.string('status').defaultTo('Em aberto');
            table.decimal('valor');
            table.dateTime('entrega');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Pedidos;
//# sourceMappingURL=1623087167512_pedidos.js.map