import { ClientService } from '../client/client.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usuarioService;
    private jwtService;
    constructor(usuarioService: ClientService, jwtService: JwtService);
    validateUser(email: string, senha: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
