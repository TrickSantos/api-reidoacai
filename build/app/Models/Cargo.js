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
const Users_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Users"));
class Cargo extends Orm_1.BaseModel {
}
__decorate([
    Orm_1.column({ isPrimary: true }),
    __metadata("design:type", Number)
], Cargo.prototype, "id", void 0);
__decorate([
    Orm_1.column({ serializeAs: 'empresaId' }),
    __metadata("design:type", Number)
], Cargo.prototype, "empresaId", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Cargo.prototype, "nome", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Object)
], Cargo.prototype, "pedidos", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Object)
], Cargo.prototype, "produtos", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Object)
], Cargo.prototype, "estoque", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Object)
], Cargo.prototype, "clientes", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Object)
], Cargo.prototype, "fornecedores", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Object)
], Cargo.prototype, "unidades", void 0);
__decorate([
    Orm_1.column({ serializeAs: 'aPagar' }),
    __metadata("design:type", Object)
], Cargo.prototype, "aPagar", void 0);
__decorate([
    Orm_1.column({ serializeAs: 'aReceber' }),
    __metadata("design:type", Object)
], Cargo.prototype, "aReceber", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Object)
], Cargo.prototype, "caixa", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Object)
], Cargo.prototype, "empresas", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Object)
], Cargo.prototype, "usuarios", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Object)
], Cargo.prototype, "cargos", void 0);
__decorate([
    Orm_1.hasMany(() => Users_1.default),
    __metadata("design:type", Object)
], Cargo.prototype, "users", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Cargo.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column({ serializeAs: 'criadoPor' }),
    __metadata("design:type", Number)
], Cargo.prototype, "createdBy", void 0);
__decorate([
    Orm_1.belongsTo(() => Users_1.default),
    __metadata("design:type", Object)
], Cargo.prototype, "criador", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Cargo.prototype, "updatedAt", void 0);
exports.default = Cargo;
//# sourceMappingURL=Cargo.js.map