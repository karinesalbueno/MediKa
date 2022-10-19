import { Controller, Post, Get, Body } from '@nestjs/common';
import { MessageDto } from 'src/messages/messages.dto';
import { Client } from './client.entity';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ClientService } from './client.service';
import { ClientRegisterDto } from './dto/client.register.dto';

@Controller()
export class ClientController {
  constructor(private readonly ClientService: ClientService) {}

  @Get('sign-in')
  async list(): Promise<Client[]> {
    return this.ClientService.findAll();
  }

  @Post('sign-up')
  async register(@Body() data: ClientRegisterDto): Promise<MessageDto> {
    return this.ClientService.register(data);
  }
}
