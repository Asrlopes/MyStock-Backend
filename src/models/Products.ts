import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Providers from './Providers';
import Categories from './Categories';

@Entity('products')
class Products {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  amount: number;

  @Column()
  img: string;

  @Column()
  category_id: number;

  @ManyToOne(() => Categories)
  @JoinColumn({ name: 'category_id' })
  category: Categories;

  @Column()
  provider_id: string;

  @ManyToMany(() => Providers)
  @JoinColumn({ name: 'category_id' })
  provider: Providers;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Products;
