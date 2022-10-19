import { MessageDto } from 'src/messages/messages.dto';
import { Repository } from 'typeorm';
import { Client } from './client.entity';
import { ClientRegisterDto } from './dto/client.register.dto';
export declare class ClientService {
    private ClientRepository;
    constructor(ClientRepository: Repository<Client>);
    findAll(): Promise<Client[]>;
    register(data: ClientRegisterDto): Promise<MessageDto>;
}
