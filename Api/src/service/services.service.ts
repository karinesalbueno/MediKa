import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { servicesData } from './servicedata.entity';
import { ServicesInsertDto } from './dto/services.insert.dto';
import { MessageDto } from 'src/messages/messages.dto';

@Injectable()
export class ServicesService {
  constructor(
    @Inject('SERVICE_REPOSITORY')
    private servicesRepository: Repository<servicesData>,
  ) {}

  async insert(data: ServicesInsertDto): Promise<MessageDto> {
    const servico = new servicesData();
    servico.comissao = data.comissao;
    servico.minutos = data.minutos;
    servico.nomeServico = data.nomeServico;
    servico.profissional = data.profissional;
    servico.valor = data.valor;

    return this.servicesRepository
      .save(servico)
      .then(() => {
        return <MessageDto>{
          status: true,
          message: 'cadastrado com sucesso! :)',
        };
      })
      .catch(() => {
        return <MessageDto>{
          status: false,
          message: 'erro ao cadastrar! :(',
        };
      });
  }
}
