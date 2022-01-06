import { Body, Controller, ForbiddenException, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { UserEntity } from 'src/entities/user.entity';
import { ClassValidationPipe } from 'src/pipes.ts/classvalidation.pipe';
import { createUserDto } from './create-user.dto';
@ApiTags('user')
@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  async getHello() {
    // throw new HttpException({
    //   status: HttpStatus.FORBIDDEN,
    //   error: 'This is a custom message',
    // }, HttpStatus.FORBIDDEN);
    return await this.userService.findAll();
    // throw new ForbiddenException();
  }
  
  @Post()
  async create(
    @Body(new ClassValidationPipe()) createUserDto: createUserDto,
  ) {
    this.userService.create(createUserDto);
  }
}
