import { ClientService } from '../client/client.service';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from 'src/token/token.service';
export declare class AuthService {
    private usuarioService;
    private jwtService;
    private tokenService;
    constructor(usuarioService: ClientService, jwtService: JwtService, tokenService: TokenService);
    validateUser(email: string, senha: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
