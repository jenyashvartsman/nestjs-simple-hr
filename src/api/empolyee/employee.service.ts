import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeEntity } from 'src/database/entity/employee.entity';
import { CreateEmployeeDto } from 'src/dto/create-employee.dto';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(EmployeeEntity)
    private employeeRepository: Repository<EmployeeEntity>,
  ) {}

  async createEmployee(
    createEmployee: CreateEmployeeDto,
  ): Promise<EmployeeEntity> {
    const newEmployee = await this.employeeRepository.create({
      firstName: createEmployee.firstName,
      lastName: createEmployee.lastName,
    });
    await this.employeeRepository.save(newEmployee);
    return newEmployee;
  }
}
