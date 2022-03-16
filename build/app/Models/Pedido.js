"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
const Produto_1 = __importDefault(require("./Produto"));
const Cliente_1 = __importDefault(require("./Cliente"));
const PedidoPagamento_1 = __importDefault(require("./PedidoPagamento"));
const Users_1 = __importDefault(require("./Users"));
class Pedido extends Orm_1.BaseModel {
}
__decorate([
    Orm_1.column({ isPrimary: true }),
    __metadata("design:type", Number)
], Pedido.prototype, "id", void 0);
__decorate([
    Orm_1.column({ serializeAs: 'clienteId' }),
    __metadata("design:type", Number)
], Pedido.prototype, "clienteId", void 0);
__decorate([
    Orm_1.column({ serializeAs: null }),
    __metadata("design:type", Number)
], Pedido.prototype, "empresaId", void 0);
__decorate([
    Orm_1.column({ serializeAs: 'criadoPor' }),
    __metadata("design:type", Number)
], Pedido.prototype, "createdBy", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Pedido.prototype, "observacoes", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Pedido.prototype, "status", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Number)
], Pedido.prototype, "valor", void 0);
__decorate([
    Orm_1.column.dateTime(),
    __metadata("design:type", luxon_1.DateTime)
], Pedido.prototype, "entrega", void 0);
__decorate([
    Orm_1.manyToMany(() => Produto_1.default, {
        localKey: 'id',
        pivotTable: 'pedido_produtos',
        relatedKey: 'id',
        pivotForeignKey: 'pedido_id',
        pivotRelatedForeignKey: 'produto_id',
        pivotColumns: ['quantidade', 'desconto'],
        pivotTimestamps: true,
    }),
    __metadata("design:type", Object)
], Pedido.prototype, "produtos", void 0);
__decorate([
    Orm_1.hasMany(() => PedidoPagamento_1.default),
    __metadata("design:type", Object)
], Pedido.prototype, "pagamento", void 0);
__decorate([
    Orm_1.belongsTo(() => Cliente_1.default),
    __metadata("design:type", Object)
], Pedido.prototype, "cliente", void 0);
__decorate([
    Orm_1.belongsTo(() => Users_1.default),
    __metadata("design:type", Object)
], Pedido.prototype, "criador", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Pedido.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Pedido.prototype, "updatedAt", void 0);
exports.default = Pedido;
//# sourceMappingURL=Pedido.js.map