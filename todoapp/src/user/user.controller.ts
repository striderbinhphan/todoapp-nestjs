import { Body, Controller, ForbiddenException, Get, HttpException, HttpStatus, Post, SetMetadata, UseGuards, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { UserEntity } from 'src/entities/user.entity';
import { ClassValidationPipe } from 'src/pipes.ts/classvalidation.pipe';
import { createUserDto } from './create-user.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { Roles } from 'src/guards/role.decorator';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';
@ApiTags('user')
@Controller('/user')
@UseInterceptors(LoggingInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  @UseGuards(AuthGuard)
  async getHello() {
    // throw new HttpException({
    //   status: HttpStatus.FORBIDDEN,
    //   error: 'This is a custom message',
    // }, HttpStatus.FORBIDDEN);
    return await this.userService.findAll();
    // throw new ForbiddenException();
  }
  
  @Post('')
  @Roles('admin')
  async create(
    @Body(new ClassValidationPipe()) createUserDto: createUserDto,
  ) {
    this.userService.create(createUserDto);
  }
}
