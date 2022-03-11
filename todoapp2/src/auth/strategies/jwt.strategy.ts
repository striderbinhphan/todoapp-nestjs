import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy} from "passport-jwt"
import { UserRepository } from "../repositories/user.repository";
export interface JwtPayload{
    username: string
}
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        @InjectRepository(UserRepository) private userRepository: UserRepository,
        private configService: ConfigService
    ){
        super({
            secretOrKey: configService.get('JWT_SECRET'),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
    }
    async validate(payload: JwtPayload) {
        console.log(payload);
        const {username} = payload;
        const user = await this.userRepository.findOne({username});
        if(!user){
            throw new UnauthorizedException();
        }
        delete user.password;
        return user;
    }
}