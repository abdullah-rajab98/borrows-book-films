import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../../dtos/users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly repo: Repository<User>) { }
  async create(createUserDto: CreateUserDto) {
    const user: User = {
      name: createUserDto.name,
      email: createUserDto.email,
      password: createUserDto.password
    }

    const newUser = await this.repo.save(user)
    delete newUser.password
    return newUser
  }

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id: number) {
    return await this.repo.findOneBy({ id: id });
  }

  async findOneByEmail(email: string) {
    return await this.repo.findOneBy({ email: email });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.repo.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
