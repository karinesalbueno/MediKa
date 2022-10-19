import { DataSource } from 'typeorm';
import { Client } from './client.entity';

export const ClientProviders = [
  {
    provide: 'Client_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Client),
    inject: ['DATA_SOURCE'],
  },
];
