import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { GetUser } from './decorators/get-user.decorator';
import { AuthCredentialsDTO } from './dto/auth.dto';
import { UserEntity } from './entities/user.entity';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService:AuthService
    ){}
    @Post('register')
    register(@Body() authCredentialsDto: AuthCredentialsDTO):Promise<UserEntity>{

        return this.authService.register(authCredentialsDto);
    }
    @Post('login')
    login(@Body() authCredentialsDto: AuthCredentialsDTO):Promise<any>{
        return this.authService.login(authCredentialsDto);
    }
    
    @Get('/test')
    // @UseGuards(AuthGuard())
    test(@Request() req){
        console.log(req.headers)
        return "eane";
    }
}
