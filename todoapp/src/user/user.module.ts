import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartEntity } from 'src/entities/cart.entity';
import { CourseEntity } from 'src/entities/course.entity';
import { SubscribeEntity } from 'src/entities/course_subscribe.entity';
import { ReviewEntity } from 'src/entities/review.entity';
import { SubjectEntity } from 'src/entities/subject.entity';
import { UserEntity } from 'src/entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity,CourseEntity,CartEntity, ReviewEntity,SubjectEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
