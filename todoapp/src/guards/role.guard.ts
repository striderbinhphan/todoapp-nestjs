import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const userRole = request.headers['role'];
    console.log(userRole)
    return matchRoles(roles, userRole);
  }
}

function matchRoles(roles: string[], userRole: string): boolean {
    // if(userRole=="admin"){
    //     return true;
    // }
    // else return false;
    return true;
}
