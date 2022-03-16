"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class PagarParcelados extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'pagar_parcelados';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('pagar_id').unsigned().references('pagar.id').onDelete('cascade');
            table.decimal('valor').notNullable();
            table.integer('parcela');
            table.dateTime('vencimento').notNullable();
            table.dateTime('pagamento');
            table.boolean('status');
            table.timestamp('created_at', { useTz: true });
            table
                .integer('created_by')
                .unsigned()
                .references('users.id')
                .onDelete('cascade')
                .notNullable();
            table
                .integer('updated_by')
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
exports.default = PagarParcelados;
//# sourceMappingURL=1635279161375_pagar_parcelados.js.map