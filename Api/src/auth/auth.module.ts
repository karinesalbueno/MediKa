import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';

import { ClientModule } from 'src/client/client.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { TokenModule } from 'src/token/token.module';

@Module({
  imports: [
    ClientModule,
    PassportModule,
    TokenModule,
    //token armazenado localmente que expira em 30minutos
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '30m' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [JwtModule, AuthService],
})
export class AuthModule {}
