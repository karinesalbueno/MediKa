import { Injectable, Inject } from '@nestjs/common';
import { MessageDto } from 'src/messages/messages.dto';
import { Repository } from 'typeorm';
import { Client } from './client.entity';
import { ClientRegisterDto } from './dto/client.register.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ClientService {
  constructor(
    @Inject('Client_REPOSITORY') private clientRepository: Repository<Client>,
  ) {}

  async register(data: ClientRegisterDto): Promise<MessageDto> {
    const user = new Client();
    user.email = data.email;
    user.senha = bcrypt.hashSync(data.senha, 8);
    user.nome = data.nome;

    return this.clientRepository
      .save(user)
      .then(() => {
        return <MessageDto>{
          status: true,
          message: 'Cadastrado com sucesso! :)',
        };
      })
      .catch(() => {
        return <MessageDto>{
          status: false,
          message: 'Erro ao efetuar cadastro :( ',
        };
      });
  }

  async Auth(email: string): Promise<Client | undefined> {
    return this.clientRepository.findOne({
      select: ['email', 'senha', 'id', 'nome'],
      where: [{ email: email }],
    });
  }
}
