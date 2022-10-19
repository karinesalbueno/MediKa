import { MessageDto } from 'src/messages/messages.dto';
import { Client } from './client.entity';
import { ClientService } from './client.service';
import { ClientRegisterDto } from './dto/client.register.dto';
export declare class ClientController {
    private readonly ClientService;
    constructor(ClientService: ClientService);
    list(): Promise<Client[]>;
    register(data: ClientRegisterDto): Promise<MessageDto>;
}
