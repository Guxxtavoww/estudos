import { 
  Column, 
  Entity, 
  JoinTable, 
  ManyToMany, 
  PrimaryGeneratedColumn 
} from "typeorm";
import { Tag } from './tag.entity';

@Entity('courses')
export class course {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  //Join
  @JoinTable()
  //N para N
  @ManyToMany(() => Tag, (tag:Tag) => tag.courses, {
    cascade: true,
  })
  tags: Tag[];
}
