import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  //-----------------------------------------------------------------
  //----- Metodos Publicos ------------------------------------------
  //-----------------------------------------------------------------
  @Post('/register')
  @ApiOperation({ description: 'Crear Usuario' })
  @ApiBody({type: CreateUserDto})
  @ApiCreatedResponse({ description: 'Usuario creado satisfactoriamente' })
  @ApiBadRequestResponse({ description: 'Datos invalidos' })
  create(@Body() createUserDto: CreateUserDto ) {
    return this.authService.create(createUserDto);
  }

  @Post('/login')
  @ApiOperation({ description: 'Loguin Usuario' })
  @ApiBody({type: LoginUserDto})
  @ApiCreatedResponse({ description: 'Realiza el loguin del usuario' })
  @ApiBadRequestResponse({ description: 'Datos invalidos' })
  login(@Body() loginDto: LoginUserDto ) {
    return this.authService.login(loginDto);
  }
}
