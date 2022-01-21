import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CoursesModule, TypeOrmModule.forRoot({
    type: 'postgres',
    port: 5433,
    username: 'postgres',
    password: 'abcd1234',
    database: 'todo_app2',
    autoLoadEntities:true,
    synchronize: true,
}), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
