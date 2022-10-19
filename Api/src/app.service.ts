import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getServices(): object {
    const services = [
      {
        id: 1,
        nome: 'Consulta',
        minutos: 30,
        valor: 100,
        profissional: 'Clínico Geral',
        comissao: 50,
      },
      {
        id: 2,
        nome: 'Consulta',
        minutos: 40,
        valor: 150,
        profissional: 'Pediatra',
        comissao: 60,
      },
      {
        id: 3,
        nome: 'Radiografia',
        minutos: 10,
        valor: 40,
        profissional: 'Radiologista',
        comissao: 20,
      },
      {
        id: 4,
        nome: 'Ecocardiograma',
        minutos: 30,
        valor: 90,
        profissional: 'Cardiologista',
        comissao: 60,
      },
    ];
    return services;
  }
}
