import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { AppService } from 'src/app.service';
import { MessageDto } from 'src/messages/messages.dto';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ClientService } from './client.service';
import { ClientRegisterDto } from './dto/client.register.dto';

@Controller('user')
export class ClientController {
  constructor(
    private readonly ClientService: ClientService,
    private readonly appService: AppService,
  ) {}

  @Get('services')
  getServices(): object {
    return this.appService.getServices();
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth')
  async login(@Request() req) {
    return req.user;
  }

  @Post('sign-up')
  async register(@Body() data: ClientRegisterDto): Promise<MessageDto> {
    return this.ClientService.register(data);
  }
}
