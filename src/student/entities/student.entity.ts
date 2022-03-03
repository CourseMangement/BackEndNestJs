import { Course } from 'src/course/entities/course.entity';
import { Entity, PrimaryGeneratedColumn, Column,ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { JoinAttribute } from 'typeorm/query-builder/JoinAttribute';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  cne: string;
  @Column()
  first_name: string;
  @Column()
  last_name: string;
  @Column()
  age: number;
  

  @ManyToMany(() => Course)
  @JoinTable()
  course: Course[];
    
}
