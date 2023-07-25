import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRole } from '../enums/role.enum';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const requiredRole = this.reflector.get<UserRole>('roles', context.getHandler());
        if (!requiredRole) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const user = request.user;

        return user && user.role === requiredRole;
    }
}