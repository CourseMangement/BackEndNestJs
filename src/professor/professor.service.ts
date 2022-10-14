import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { Professor } from './entities/professor.entity';

@Injectable()
export class ProfessorService {
  constructor(
    @InjectRepository(Professor)
    private professorRepository: Repository<Professor>,
  ) {}

  create(createProfessorDto: CreateProfessorDto) {
    return this.professorRepository.save(createProfessorDto);
  }

  findAll() {
    return this.professorRepository.find();
  }

  findOne(id: number) {
    return this.professorRepository.findOne(id);
  }

  update(id: number, updateProfessorDto: UpdateProfessorDto) {
    return this.professorRepository.update(id, updateProfessorDto);
  }

  remove(id: number) {
    return this.professorRepository.delete(id);
  }
}
