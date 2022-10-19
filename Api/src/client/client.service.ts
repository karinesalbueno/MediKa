import { Injectable, Inject } from '@nestjs/common';
import { MessageDto } from 'src/messages/messages.dto';
import { Repository } from 'typeorm';
import { Client } from './client.entity';
import { ClientRegisterDto } from './dto/client.register.dto';

@Injectable()
export class ClientService {
  constructor(
    @Inject('Client_REPOSITORY')
    private ClientRepository: Repository<Client>,
  ) {}

  async findAll(): Promise<Client[]> {
    return this.ClientRepository.find();
  }
  async register(data: ClientRegisterDto): Promise<MessageDto> {
    const user = new Client();
    user.email = data.email;
    user.senha = data.senha;
    user.nome = data.nome;

    return this.ClientRepository.save(user)
      .then(() => {
        return <MessageDto>{
          status: true,
          message: 'Cadastrado com sucesso! :)',
        };
      })
      .catch(() => {
        return <MessageDto>{
          status: false,
          message: 'Erro ao efetuar cadastro :(',
        };
      });
  }
}
