import { Injectable } from '@nestjs/common';
import { ClientService } from '../client/client.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Client } from 'src/client/client.entity';
import { TokenService } from 'src/token/token.service';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: ClientService,
    private jwtService: JwtService,
    private tokenService: TokenService,
  ) {}

  //Valida o usuário com email, senha fornecida e a criptografada
  async validateUser(email: string, senha: string): Promise<any> {
    const usuario = await this.usuarioService.Auth(email);
    if (usuario && bcrypt.compareSync(senha, usuario.senha)) {
      const { ...result } = usuario;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    const token = this.jwtService.sign(payload);
    this.tokenService.save(token, user.email);
    return {
      access_token: token,
    };
  }
}
