import { ClientService } from '../client/client.service';
export declare class AuthService {
    private usuarioService;
    constructor(usuarioService: ClientService);
    validateUser(email: string, senha: string): Promise<any>;
}
