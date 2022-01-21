import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
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
}
