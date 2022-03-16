"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Pagars extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'pagar';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table
                .integer('empresa_id')
                .unsigned()
                .references('empresas.id')
                .onDelete('cascade')
                .notNullable();
            table.integer('fornecedor_id').unsigned().references('fornecedores.id').onDelete('cascade');
            table.decimal('valor').notNullable();
            table.enum('status', ['pago', 'aguardando', 'vencido']).defaultTo('aguardando');
            table.timestamp('created_at', { useTz: true });
            table
                .integer('created_by')
                .unsigned()
                .references('users.id')
                .onDelete('cascade')
                .notNullable();
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Pagars;
//# sourceMappingURL=1635278149284_pagars.js.map