import { forwardRef, Module } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { AuthModule } from 'src/auth/auth.module';
import { DatabaseModule } from '../database/database.module';
import { ClientController } from './client.controller';
import { ClientProviders } from './client.providers';
import { ClientService } from './client.service';

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  controllers: [ClientController],
  providers: [...ClientProviders, ClientService, AppService],
  exports: [ClientService],
})
export class ClientModule {}
