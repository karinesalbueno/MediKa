import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Token } from './token.entity';
import { ClientService } from 'src/client/client.service';
import { AuthService } from 'src/auth/auth.service';
import { Client } from 'src/client/client.entity';
export declare class TokenService {
    private tokenRepository;
    private usuarioService;
    private authService;
    constructor(tokenRepository: Repository<Token>, usuarioService: ClientService, authService: AuthService);
    save(hash: string, username: string): Promise<void>;
    refreshToken(oldToken: string): Promise<HttpException | {
        access_token: string;
    }>;
    getUsuarioByToken(token: string): Promise<Client>;
}
