import { DataSource } from 'typeorm';
import { Client } from './client.entity';
export declare const ClientProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Client>;
    inject: string[];
}[];
