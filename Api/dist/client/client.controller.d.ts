import { ClientService } from './client.service';
import { ClientRegisterDto } from './dto/client.register.dto';
import { AuthService } from 'src/auth/auth.service';
import { AppService } from 'src/app.service';
import { MessageDto } from 'src/messages/messages.dto';
export declare class ClientController {
    private readonly ClientService;
    private readonly appService;
    private authService;
    constructor(ClientService: ClientService, appService: AppService, authService: AuthService);
    getServices(): object;
    login(req: any): Promise<{
        access_token: string;
    }>;
    register(data: ClientRegisterDto): Promise<MessageDto>;
}
