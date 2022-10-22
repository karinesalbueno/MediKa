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
exports.TokenService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const client_service_1 = require("../client/client.service");
const auth_service_1 = require("../auth/auth.service");
let TokenService = class TokenService {
    constructor(tokenRepository, usuarioService, authService) {
        this.tokenRepository = tokenRepository;
        this.usuarioService = usuarioService;
        this.authService = authService;
    }
    async save(hash, username) {
        const objToken = await this.tokenRepository.findOne({
            select: ['username'],
            where: { username: username },
        });
        if (objToken) {
            this.tokenRepository.update(objToken.id, {
                hash: hash,
            });
        }
        else {
            this.tokenRepository.insert({
                hash: hash,
                username: username,
            });
        }
    }
    async refreshToken(oldToken) {
        const objToken = await this.tokenRepository.findOne({
            select: ['hash'],
            where: { hash: oldToken },
        });
        if (objToken) {
            const usuario = await this.usuarioService.Auth(objToken.username);
            return this.authService.login(usuario);
        }
        else {
            return new common_1.HttpException({
                errorMessage: 'Token inválido',
            }, common_1.HttpStatus.UNAUTHORIZED);
        }
    }
    async getUsuarioByToken(token) {
        const objToken = await this.tokenRepository.findOne({
            select: ['hash', 'id', 'username'],
            where: [{ hash: token }],
        });
        if (objToken) {
            const usuario = await this.usuarioService.Auth(objToken.username);
            return usuario;
        }
        else {
            return null;
        }
    }
};
TokenService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('TOKEN_REPOSITORY')),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => auth_service_1.AuthService))),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        client_service_1.ClientService,
        auth_service_1.AuthService])
], TokenService);
exports.TokenService = TokenService;
//# sourceMappingURL=token.service.js.map