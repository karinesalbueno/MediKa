import { Connection } from 'typeorm';
import { servicesData } from './servicedata.entity';

export const ServiceProviders = [
  {
    provide: 'SERVICE_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(servicesData),
    inject: ['DATABASE_CONNECTION'],
  },
];
