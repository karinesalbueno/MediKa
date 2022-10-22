import { DataSource } from 'typeorm';
export declare const ClientProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<import("typeorm").ObjectLiteral>;
    inject: string[];
}[];
