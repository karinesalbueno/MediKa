"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceModule = void 0;
const common_1 = require("@nestjs/common");
const token_module_1 = require("../token/token.module");
const token_providers_1 = require("../token/token.providers");
const database_module_1 = require("../database/database.module");
const services_controller_1 = require("./services.controller");
const services_providers_1 = require("./services.providers");
const services_service_1 = require("./services.service");
let ServiceModule = class ServiceModule {
};
ServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, token_module_1.TokenModule],
        controllers: [services_controller_1.ServiceController],
        providers: [...services_providers_1.ServiceProviders, ...token_providers_1.tokenProviders, services_service_1.ServicesService],
        exports: [services_service_1.ServicesService],
    })
], ServiceModule);
exports.ServiceModule = ServiceModule;
//# sourceMappingURL=services.module.js.map