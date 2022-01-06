import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import ormConfig from './config/orm.config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { CourseEntity } from './entities/course.entity';
import { CartEntity } from './entities/cart.entity';
import { SubscribeEntity } from './entities/course_subscribe.entity';
import { ReviewEntity } from './entities/review.entity';
import { SubjectEntity } from './entities/subject.entity';
import { SubjectController } from './subject/subject.controller';
import { SubjectModule } from './subject/subject.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { CategoryModule } from './category/category.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './guards/role.guard';
@Module({
  imports: [
    // ConfigModule.forRoot({
    // isGlobal: true,
    // load: [ormConfig],
    // expandVariables: true,
    // }),
    // TypeOrmModule.forRootAsync({useFactory:ormConfig}),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'online_courses',
      entities: [UserEntity,CourseEntity,CartEntity, ReviewEntity,SubjectEntity],
      synchronize: false,
    }),
    UserModule,
    SubjectModule,
    CategoryModule,
    
  ],
  controllers: [AppController],
  providers: [AppService,{
    provide: APP_GUARD,
    useClass: RolesGuard,
  },],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/');
  }

}
