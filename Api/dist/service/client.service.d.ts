import { MessageDto } from 'src/messages/messages.dto';
import { Repository } from 'typeorm';
import { Client } from './client.entity';
import { ClientRegisterDto } from './dto/client.register.dto';
export declare class ClientService {
    private clientRepository;
    constructor(clientRepository: Repository<Client>);
    register(data: ClientRegisterDto): Promise<MessageDto>;
    Auth(email: string): Promise<Client | undefined>;
}
