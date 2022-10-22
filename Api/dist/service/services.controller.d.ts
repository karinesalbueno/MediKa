import { ServicesService } from './services.service';
import { ServicesInsertDto } from './dto/services.insert.dto';
import { MessageDto } from 'src/messages/messages.dto';
export declare class ServiceController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    cadastrar(data: ServicesInsertDto): Promise<MessageDto>;
}
