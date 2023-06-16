import { BadRequestException, CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { META_ROLES } from '../decorators/role-protected.decorator';

@Injectable()
export class UserRoleGuard implements CanActivate {

  constructor (
    private readonly reflector: Reflector
  ) {
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const validRoles = this.reflector.get(META_ROLES, context.getHandler());
    
    if ( validRoles && validRoles.length > 0 ){
      const request = context.switchToHttp().getRequest();
      const user = request.user;  
      if ( !user) 
        throw new BadRequestException(`Usuario no encontrado`)
      
      const userRoles: string[] = user.roles.split(',');
      for (const role of userRoles ) {
        if ( validRoles.includes( role ) ) {
          return true;
        }
      }

      throw new ForbiddenException (
        `User ${ user.fullName } necesita un rol valido: [${ validRoles }]`
      );
      
    }

    return true;
  }
}
