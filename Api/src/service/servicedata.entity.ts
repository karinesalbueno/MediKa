import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class servicesData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nomeServico: string;

  @Column()
  valor: number;

  @Column()
  profissional: string;

  @Column()
  comissao: number;

  @Column()
  minutos: number;
}
