import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { url } from 'inspector';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   envFilePath: [`.env.stage.${process.env.STAGE}`]
    // }), 
    ConfigModule.forRoot({
      envFilePath: ['dev.env']
    }), 
    // CoursesModule,
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: async (configService: ConfigService) => ({
    //     uri: configService.get<string>('MONGO_URI'),
    //     authSource: 'admin',
    //     user: configService.get<string>('MONGO_USERNAME'),
    //     pass: configService.get<string>('MONGO_PASSWORD')
    //   })
    // }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: process.env.MONGO_URI,
        authSource: 'admin',
        user: process.env.MONGO_USERNAME,
        pass: process.env.MONGO_PASSWORD
      })
    }),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: async (configService: ConfigService)=>({
    //     type: 'postgres',
    //     autoLoadEntities:true,
    //     synchronize: true,
    //     host: configService.get('DB_HOST'),
    //     port: configService.get('DB_PORT'),
    //     username: configService.get('DB_USERNAME'),
    //     password: configService.get('DB_PASSWORD'),
    //     database: configService.get('DB_DATABASE'),
    //   })
    // }),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5433,
    //   username: 'postgres',
    //   password: 'abcd1234',
    //   database: 'todo_app2',
    //   autoLoadEntities:true,
    //   synchronize: true,
    // }), 
    // AuthModule
    TaskModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
