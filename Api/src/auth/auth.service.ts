import { Injectable } from '@nestjs/common';
import { ClientService } from '../client/client.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: ClientService,
    private jwtService: JwtService,
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
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
