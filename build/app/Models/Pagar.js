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
const Fornecedor_1 = __importDefault(require("./Fornecedor"));
const PagarParcelado_1 = __importDefault(require("./PagarParcelado"));
const Users_1 = __importDefault(require("./Users"));
class Pagar extends Orm_1.BaseModel {
}
Pagar.table = 'pagar';
__decorate([
    Orm_1.column({ isPrimary: true }),
    __metadata("design:type", Number)
], Pagar.prototype, "id", void 0);
__decorate([
    Orm_1.column({ serializeAs: 'empresaId' }),
    __metadata("design:type", Number)
], Pagar.prototype, "empresaId", void 0);
__decorate([
    Orm_1.column({ serializeAs: 'fornecedorId' }),
    __metadata("design:type", Number)
], Pagar.prototype, "fornecedorId", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Number)
], Pagar.prototype, "valor", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Pagar.prototype, "status", void 0);
__decorate([
    Orm_1.hasMany(() => PagarParcelado_1.default),
    __metadata("design:type", Object)
], Pagar.prototype, "parcelas", void 0);
__decorate([
    Orm_1.belongsTo(() => Fornecedor_1.default),
    __metadata("design:type", Object)
], Pagar.prototype, "fornecedor", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, serializeAs: 'data' }),
    __metadata("design:type", luxon_1.DateTime)
], Pagar.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column({ serializeAs: 'criadoPor' }),
    __metadata("design:type", Number)
], Pagar.prototype, "createdBy", void 0);
__decorate([
    Orm_1.belongsTo(() => Users_1.default),
    __metadata("design:type", Object)
], Pagar.prototype, "criador", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Pagar.prototype, "updatedAt", void 0);
exports.default = Pagar;
//# sourceMappingURL=Pagar.js.map