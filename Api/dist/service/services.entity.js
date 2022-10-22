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
exports.servicesData = void 0;
const typeorm_1 = require("typeorm");
let servicesData = class servicesData {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], servicesData.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], servicesData.prototype, "nomeServico", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], servicesData.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], servicesData.prototype, "profissional", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], servicesData.prototype, "comissao", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], servicesData.prototype, "minutos", void 0);
servicesData = __decorate([
    (0, typeorm_1.Entity)()
], servicesData);
exports.servicesData = servicesData;
//# sourceMappingURL=services.entity.js.map