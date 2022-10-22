import { Module } from '@nestjs/common';
import { TokenModule } from 'src/token/token.module';
import { tokenProviders } from 'src/token/token.providers';
import { DatabaseModule } from '../database/database.module';
import { ServiceController } from './services.controller';
import { ServiceProviders } from './services.providers';
import { ServicesService } from './services.service';

@Module({
  imports: [DatabaseModule, TokenModule],
  controllers: [ServiceController],
  providers: [...ServiceProviders, ...tokenProviders, ServicesService],
  exports: [ServicesService],
})
export class ServiceModule {}
