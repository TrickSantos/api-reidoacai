"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Users extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'users';
    }
    async up() {
        this.schema.table(this.tableName, (table) => {
            table.integer('cargo_id').unsigned().references('cargos.id');
            table.dropColumn('perfil');
        });
    }
    async down() {
        this.schema.table(this.tableName, (table) => {
            table.dropColumn('cargo_id');
            table.enum('perfil', ['administrador', 'caixa']).defaultTo('caixa');
        });
    }
}
exports.default = Users;
//# sourceMappingURL=1626287544576_alter_cargo_users.js.map