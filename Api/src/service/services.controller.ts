import { Controller, Post, Get, Req, Body } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ServicesService } from './services.service';
import { ServicesInsertDto } from './dto/services.insert.dto';
import { MessageDto } from 'src/messages/messages.dto';

@Controller()
export class ServiceController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post('insert-services')
  async cadastrar(@Body() data: ServicesInsertDto): Promise<MessageDto> {
    return this.servicesService.insert(data);
  }
}
