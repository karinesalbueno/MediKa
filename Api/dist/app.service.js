"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    getServices() {
        const services = [
            {
                id: 1,
                nome: 'Consulta',
                minutos: 30,
                valor: 100,
                profissional: 'Clínico Geral',
                comissao: 50,
            },
            {
                id: 2,
                nome: 'Consulta',
                minutos: 40,
                valor: 150,
                profissional: 'Pediatra',
                comissao: 60,
            },
            {
                id: 3,
                nome: 'Radiografia',
                minutos: 10,
                valor: 40,
                profissional: 'Radiologista',
                comissao: 20,
            },
            {
                id: 4,
                nome: 'Ecocardiograma',
                minutos: 30,
                valor: 90,
                profissional: 'Cardiologista',
                comissao: 60,
            },
        ];
        return services;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map