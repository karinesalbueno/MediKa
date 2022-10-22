import { Connection } from 'typeorm';
import { servicesData } from './servicedata.entity';
export declare const ServiceProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<servicesData>;
    inject: string[];
}[];
