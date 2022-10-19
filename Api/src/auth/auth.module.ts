import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ClientModule } from 'src/client/client.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [ClientModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
