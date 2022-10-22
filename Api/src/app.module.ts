import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ServiceModule } from './service/services.module';

@Module({
  imports: [AuthModule, ServiceModule],
  providers: [AppService],
})
export class AppModule {}
