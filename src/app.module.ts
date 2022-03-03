import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessorModule } from './professor/professor.module';
import { CourseModule } from './course/course.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ProfessorModule, CourseModule, StudentModule],
  controllers: [AppController],
  providers: [AppService],
 
})
export class AppModule {}
