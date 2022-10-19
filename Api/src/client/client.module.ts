import { Module } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { DatabaseModule } from '../database/database.module';
import { ClientController } from './client.controller';
import { ClientProviders } from './client.providers';
import { ClientService } from './client.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ClientController],
  providers: [...ClientProviders, ClientService, AppService],
  exports: [ClientService],
})
export class ClientModule {}
