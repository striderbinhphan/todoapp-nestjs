import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CourseEntity } from 'src/entities/course.entity';
import { UserEntity } from 'src/entities/user.entity';

export default registerAs(
  'orm.config',
  (): TypeOrmModuleOptions => ({
    type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'online_courses',
      entities: [UserEntity,CourseEntity],
      synchronize: true,
    })
);