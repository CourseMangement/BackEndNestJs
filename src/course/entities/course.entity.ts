import { Professor } from 'src/professor/entities/professor.entity';
import { Student } from 'src/student/entities/student.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,OneToMany, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  languge: string;
  @Column()
  duration: number;
  @ManyToOne(() => Professor)
  professor: Professor;

  @ManyToMany(() => Student)
 
  student: Student[];
    

   
}
