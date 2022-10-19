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
exports.ClientController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("@nestjs/passport/dist/auth.guard");
const app_service_1 = require("../app.service");
const client_service_1 = require("./client.service");
let ClientController = class ClientController {
    constructor(ClientService, appService) {
        this.ClientService = ClientService;
        this.appService = appService;
    }
    getServices() {
        return this.appService.getServices();
    }
    async login(req) {
        return req.user;
    }
    async register(data) {
        return this.ClientService.register(data);
    }
};
__decorate([
    (0, common_1.Get)('services'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ClientController.prototype, "getServices", null);
__decorate([
    (0, common_1.UseGuards)((0, auth_guard_1.AuthGuard)('local')),
    (0, common_1.Post)('auth'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('sign-up'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "register", null);
ClientController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [client_service_1.ClientService,
        app_service_1.AppService])
], ClientController);
exports.ClientController = ClientController;
//# sourceMappingURL=client.controller.js.map