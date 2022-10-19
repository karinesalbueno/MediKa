import { Injectable } from '@nestjs/common';
import { ClientService } from '../client/client.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usuarioService: ClientService) {}

  async validateUser(email: string, senha: string): Promise<any> {
    const usuario = await this.usuarioService.Auth(email);
    if (usuario && bcrypt.compareSync(senha, usuario.senha)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { senha, ...result } = usuario;
      return result;
    }
    return null;
  }
}
