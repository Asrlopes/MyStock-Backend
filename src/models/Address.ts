import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Cities from './Cities';

@Entity('address')
class Address {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  rua: string;

  @Column()
  number: number;

  @Column()
  zip_code: string;

  @Column()
  neighborhood: string;

  @Column()
  city_id: number;

  @ManyToOne(() => Cities)
  @JoinColumn({ name: 'city_id' })
  city: Cities;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Address;
