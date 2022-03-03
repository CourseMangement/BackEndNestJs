import { Course } from 'src/course/entities/course.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Professor {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  first_name: string;
  @Column()
  last_name: string;
  @Column()
  age: number;
  @Column()
  grade: string;
  @OneToMany(() => Course, (course) => course.professor)
  courses: Course[];
}
