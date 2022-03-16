"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Estoques extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'estoques';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table
                .integer('empresa_id')
                .unsigned()
                .references('empresas.id')
                .onDelete('CASCADE')
                .notNullable();
            table
                .integer('produto_id')
                .unsigned()
                .references('produtos.id')
                .onDelete('CASCADE')
                .notNullable();
            table.integer('quantidade').notNullable();
            table.enum('tipo', ['entrada', 'saida']).notNullable();
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
exports.default = Estoques;
//# sourceMappingURL=1647007276330_estoques.js.map