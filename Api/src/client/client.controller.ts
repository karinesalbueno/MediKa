import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ClientService } from './client.service';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

import { ClientRegisterDto } from './dto/client.register.dto';
import { AuthService } from 'src/auth/auth.service';
import { AppService } from 'src/app.service';
import { MessageDto } from 'src/messages/messages.dto';

@Controller('user')
export class ClientController {
  constructor(
    private readonly ClientService: ClientService,
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  //Rota de listagem de serviços com verificação de token
  @UseGuards(JwtAuthGuard)
  @Get('services')
  getServices(): object {
    return this.appService.getServices();
  }

  //Rota de autenticação (login)
  @UseGuards(AuthGuard('local'))
  @Post('auth')
  async login(@Request() req) {
    //retorna token de acesso :)
    return this.authService.login(req.user);
  }

  //Rota de Cadastro de login
  @Post('sign-up')
  async register(@Body() data: ClientRegisterDto): Promise<MessageDto> {
    return this.ClientService.register(data);
  }
}
