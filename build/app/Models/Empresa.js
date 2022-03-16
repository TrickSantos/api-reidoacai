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
const Users_1 = __importDefault(require("./Users"));
const Cliente_1 = __importDefault(require("./Cliente"));
const Cargo_1 = __importDefault(require("./Cargo"));
class Empresa extends Orm_1.BaseModel {
}
__decorate([
    Orm_1.column({ isPrimary: true }),
    __metadata("design:type", Number)
], Empresa.prototype, "id", void 0);
__decorate([
    Orm_1.column({ serializeAs: 'razaoSocial' }),
    __metadata("design:type", String)
], Empresa.prototype, "razaoSocial", void 0);
__decorate([
    Orm_1.column({ serializeAs: 'nomeFantasia' }),
    __metadata("design:type", String)
], Empresa.prototype, "nomeFantasia", void 0);
__decorate([
    Orm_1.column({ serializeAs: 'cnpjCpf' }),
    __metadata("design:type", String)
], Empresa.prototype, "cnpjCpf", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Empresa.prototype, "email", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Empresa.prototype, "telefone", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Empresa.prototype, "endereco", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Empresa.prototype, "plano", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Boolean)
], Empresa.prototype, "status", void 0);
__decorate([
    Orm_1.hasMany(() => Users_1.default),
    __metadata("design:type", Object)
], Empresa.prototype, "users", void 0);
__decorate([
    Orm_1.hasMany(() => Cliente_1.default),
    __metadata("design:type", Object)
], Empresa.prototype, "clientes", void 0);
__decorate([
    Orm_1.hasMany(() => Cargo_1.default),
    __metadata("design:type", Object)
], Empresa.prototype, "cargos", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Empresa.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Empresa.prototype, "updatedAt", void 0);
exports.default = Empresa;
//# sourceMappingURL=Empresa.js.map