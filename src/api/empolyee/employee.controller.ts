import { Controller, Post, Body } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from 'src/dto/create-employee.dto';
import { EmployeeEntity } from 'src/database/entity/employee.entity';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async createEmployee(
    @Body() createEmployee: CreateEmployeeDto,
  ): Promise<EmployeeEntity> {
    return this.employeeService.createEmployee(createEmployee);
  }
}
