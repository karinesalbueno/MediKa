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
exports.ClientService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const client_entity_1 = require("./client.entity");
const bcrypt = require("bcrypt");
let ClientService = class ClientService {
    constructor(clientRepository) {
        this.clientRepository = clientRepository;
    }
    async register(data) {
        const user = new client_entity_1.Client();
        user.email = data.email;
        user.senha = bcrypt.hashSync(data.senha, 8);
        user.nome = data.nome;
        return this.clientRepository
            .save(user)
            .then(() => {
            return {
                status: true,
                message: 'Cadastrado com sucesso! :)',
            };
        })
            .catch(() => {
            return {
                status: false,
                message: 'Erro ao efetuar cadastro :( ',
            };
        });
    }
    async Auth(email) {
        return this.clientRepository.findOne({
            select: ['email', 'senha', 'id', 'nome'],
            where: [{ email: email }],
        });
    }
};
ClientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('Client_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ClientService);
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map