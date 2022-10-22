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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const servicedata_entity_1 = require("./servicedata.entity");
let ServicesService = class ServicesService {
    constructor(servicesRepository) {
        this.servicesRepository = servicesRepository;
    }
    async insert(data) {
        const servico = new servicedata_entity_1.servicesData();
        servico.comissao = data.comissao;
        servico.minutos = data.minutos;
        servico.nomeServico = data.nomeServico;
        servico.profissional = data.profissional;
        servico.valor = data.valor;
        return this.servicesRepository
            .save(servico)
            .then(() => {
            return {
                status: true,
                message: 'cadastrado com sucesso! :)',
            };
        })
            .catch(() => {
            return {
                status: false,
                message: 'erro ao cadastrar! :(',
            };
        });
    }
};
ServicesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ServicesService);
exports.ServicesService = ServicesService;
//# sourceMappingURL=services.service.js.map