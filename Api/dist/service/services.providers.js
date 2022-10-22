"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceProviders = void 0;
const servicedata_entity_1 = require("./servicedata.entity");
exports.ServiceProviders = [
    {
        provide: 'SERVICE_REPOSITORY',
        useFactory: (connection) => connection.getRepository(servicedata_entity_1.servicesData),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=services.providers.js.map