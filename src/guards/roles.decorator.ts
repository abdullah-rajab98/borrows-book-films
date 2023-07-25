import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './jwt.guard';
import { RoleGuard } from './roles.guard';
import { UserRole } from '../enums/role.enum';

export function Role(role: UserRole) {
    return applyDecorators(
        UseGuards(JwtAuthGuard),
        SetMetadata('roles', role),
        UseGuards(RoleGuard),
    );
}
