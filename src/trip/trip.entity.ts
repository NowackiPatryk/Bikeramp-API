import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Trip {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  start_address: string;

  @Column()
  destination_address: string;

  @Column({
    type: 'float',
  })
  distance: number;

  @Column({
    type: 'float',
  })
  price: number;

  @CreateDateColumn({
    type: 'date',
    default: () => 'CURRENT_TIMESTAMP(1)',
  })
  date: Date;
}
