import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ClientModule, AuthModule],
  providers: [AppService],
})
export class AppModule {}
