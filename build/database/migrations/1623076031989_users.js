"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class UsersSchema extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'users';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary();
            table
                .integer('empresa_id')
                .unsigned()
                .references('id')
                .inTable('empresas')
                .onDelete('cascade');
            table.string('email', 255).unique().notNullable();
            table.string('password', 180).notNullable();
            table.string('remember_me_token').nullable();
            table.string('nome');
            table.string('cpf').unique();
            table.enum('perfil', ['administrador', 'caixa']).defaultTo('caixa');
            table.boolean('status').defaultTo(true);
            table.timestamp('created_at', { useTz: true }).notNullable();
            table.timestamp('updated_at', { useTz: true }).notNullable();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = UsersSchema;
//# sourceMappingURL=1623076031989_users.js.map