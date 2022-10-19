import { AppService } from 'src/app.service';
import { MessageDto } from 'src/messages/messages.dto';
import { ClientService } from './client.service';
import { ClientRegisterDto } from './dto/client.register.dto';
export declare class ClientController {
    private readonly ClientService;
    private readonly appService;
    constructor(ClientService: ClientService, appService: AppService);
    getServices(): object;
    login(req: any): Promise<any>;
    register(data: ClientRegisterDto): Promise<MessageDto>;
}
