import {
  Injectable,
  Inject,
  HttpException,
  HttpStatus,
  forwardRef,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Token } from './token.entity';
import { ClientService } from 'src/client/client.service';
import { AuthService } from 'src/auth/auth.service';
import { Client } from 'src/client/client.entity';

@Injectable()
export class TokenService {
  constructor(
    @Inject('TOKEN_REPOSITORY')
    private tokenRepository: Repository<Token>,
    private usuarioService: ClientService,
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
  ) {}

  async save(hash: string, username: string) {
    const objToken = await this.tokenRepository.findOne({
      select: ['username'],
      where: { username: username },
    });
    if (objToken) {
      this.tokenRepository.update(objToken.id, {
        hash: hash,
      });
    } else {
      this.tokenRepository.insert({
        hash: hash,
        username: username,
      });
    }
  }

  async refreshToken(oldToken: string) {
    const objToken = await this.tokenRepository.findOne({
      select: ['hash'],
      where: { hash: oldToken },
    });
    if (objToken) {
      const usuario = await this.usuarioService.Auth(objToken.username);
      return this.authService.login(usuario);
    } else {
      //é uma requisição inválida
      return new HttpException(
        {
          errorMessage: 'Token inválido',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  async getUsuarioByToken(token: string): Promise<Client> {
    const objToken: Token = await this.tokenRepository.findOne({
      select: ['hash', 'id', 'username'],
      where: [{ hash: token }],
    });
    if (objToken) {
      const usuario = await this.usuarioService.Auth(objToken.username);
      return usuario;
    } else {
      //é uma requisição inválida
      return null;
    }
  }
}
