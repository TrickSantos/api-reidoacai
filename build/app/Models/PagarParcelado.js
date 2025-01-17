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
const Pagar_1 = __importDefault(require("./Pagar"));
const Users_1 = __importDefault(require("./Users"));
class PagarParcelado extends Orm_1.BaseModel {
}
__decorate([
    Orm_1.column({ isPrimary: true }),
    __metadata("design:type", Number)
], PagarParcelado.prototype, "id", void 0);
__decorate([
    Orm_1.column({ serializeAs: 'pagarId' }),
    __metadata("design:type", Number)
], PagarParcelado.prototype, "pagarId", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Number)
], PagarParcelado.prototype, "valor", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Number)
], PagarParcelado.prototype, "parcela", void 0);
__decorate([
    Orm_1.column.dateTime(),
    __metadata("design:type", luxon_1.DateTime)
], PagarParcelado.prototype, "vencimento", void 0);
__decorate([
    Orm_1.column.dateTime(),
    __metadata("design:type", luxon_1.DateTime)
], PagarParcelado.prototype, "pagamento", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Boolean)
], PagarParcelado.prototype, "status", void 0);
__decorate([
    Orm_1.belongsTo(() => Pagar_1.default),
    __metadata("design:type", Object)
], PagarParcelado.prototype, "pagar", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], PagarParcelado.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column({ serializeAs: 'criadoPor' }),
    __metadata("design:type", Number)
], PagarParcelado.prototype, "createdBy", void 0);
__decorate([
    Orm_1.belongsTo(() => Users_1.default),
    __metadata("design:type", Object)
], PagarParcelado.prototype, "criador", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], PagarParcelado.prototype, "updatedAt", void 0);
__decorate([
    Orm_1.column({ serializeAs: 'atualizadoPor' }),
    __metadata("design:type", Number)
], PagarParcelado.prototype, "updatedBy", void 0);
__decorate([
    Orm_1.belongsTo(() => Users_1.default),
    __metadata("design:type", Object)
], PagarParcelado.prototype, "atualizador", void 0);
exports.default = PagarParcelado;
//# sourceMappingURL=PagarParcelado.js.map