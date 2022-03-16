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
const Receber_1 = __importDefault(require("./Receber"));
const Users_1 = __importDefault(require("./Users"));
class ReceberParcelado extends Orm_1.BaseModel {
}
__decorate([
    Orm_1.column({ isPrimary: true }),
    __metadata("design:type", Number)
], ReceberParcelado.prototype, "id", void 0);
__decorate([
    Orm_1.column({ serializeAs: 'receberId' }),
    __metadata("design:type", Number)
], ReceberParcelado.prototype, "receberId", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Number)
], ReceberParcelado.prototype, "valor", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Number)
], ReceberParcelado.prototype, "parcela", void 0);
__decorate([
    Orm_1.column.dateTime(),
    __metadata("design:type", luxon_1.DateTime)
], ReceberParcelado.prototype, "vencimento", void 0);
__decorate([
    Orm_1.column.dateTime(),
    __metadata("design:type", luxon_1.DateTime)
], ReceberParcelado.prototype, "pagamento", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Boolean)
], ReceberParcelado.prototype, "status", void 0);
__decorate([
    Orm_1.belongsTo(() => Receber_1.default),
    __metadata("design:type", Object)
], ReceberParcelado.prototype, "receber", void 0);
__decorate([
    Orm_1.column({ serializeAs: 'criadoPor' }),
    __metadata("design:type", Number)
], ReceberParcelado.prototype, "createdBy", void 0);
__decorate([
    Orm_1.belongsTo(() => Users_1.default),
    __metadata("design:type", Object)
], ReceberParcelado.prototype, "criador", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], ReceberParcelado.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column({ serializeAs: 'atualizadoPor' }),
    __metadata("design:type", Number)
], ReceberParcelado.prototype, "updatedBy", void 0);
__decorate([
    Orm_1.belongsTo(() => Users_1.default),
    __metadata("design:type", Object)
], ReceberParcelado.prototype, "atualizador", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], ReceberParcelado.prototype, "updatedAt", void 0);
exports.default = ReceberParcelado;
//# sourceMappingURL=ReceberParcelado.js.map