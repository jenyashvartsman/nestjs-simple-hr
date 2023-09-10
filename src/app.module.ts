import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { EmpolyeeModule } from './api/empolyee/employee.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, EmpolyeeModule],
})
export class AppModule {}
