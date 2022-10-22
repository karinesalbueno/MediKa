import { Repository } from 'typeorm';
import { servicesData } from './servicedata.entity';
import { ServicesInsertDto } from './dto/services.insert.dto';
import { MessageDto } from 'src/messages/messages.dto';
export declare class ServicesService {
    private servicesRepository;
    constructor(servicesRepository: Repository<servicesData>);
    insert(data: ServicesInsertDto): Promise<MessageDto>;
}
