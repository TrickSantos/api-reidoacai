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
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
class Caixa extends Orm_1.BaseModel {
}
__decorate([
    Orm_1.column({ isPrimary: true }),
    __metadata("design:type", Number)
], Caixa.prototype, "id", void 0);
__decorate([
    Orm_1.column({ serializeAs: null }),
    __metadata("design:type", Number)
], Caixa.prototype, "empresaId", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Number)
], Caixa.prototype, "valor", void 0);
__decorate([
    Orm_1.column.date(),
    __metadata("design:type", luxon_1.DateTime)
], Caixa.prototype, "data", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Boolean)
], Caixa.prototype, "status", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Caixa.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Caixa.prototype, "updatedAt", void 0);
exports.default = Caixa;
//# sourceMappingURL=Caixa.js.map