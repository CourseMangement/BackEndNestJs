import { Course } from 'src/course/entities/course.entity';
import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private CourseRepository: Repository<Course>,
  ) {}

  create(createCourseDto: CreateCourseDto) {
    return this.CourseRepository.save(createCourseDto);
  }

  findAll() {
    return this.CourseRepository.find();
  }

  findOne(id: number) {
    return this.CourseRepository.findOne(id);
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return this.CourseRepository.update(id, updateCourseDto);
  }

  remove(id: number) {
    return this.CourseRepository.delete(id);
  }
}
