import { UseGuards, applyDecorators } from "@nestjs/common";
import { ValidRoles } from "../interfaces";
import { RoleProtected } from "./role-protected.decorator";
import { AuthGuard } from "../guard/auth.guard";
import { UserRoleGuard } from "../guard/user-role.guard";

export function Auth(...roles : ValidRoles[]) {
  return applyDecorators (
    RoleProtected( ...roles ),
    UseGuards( AuthGuard, UserRoleGuard )
  )
}