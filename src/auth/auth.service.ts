import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';


@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService
  ){}
  
  //-----------------------------------------------------------------
  //----- Metodos Publicos ------------------------------------------
  //-----------------------------------------------------------------
  async create(createUserDto: CreateUserDto) {
    try {
      const { password, roles, ...userDto } = createUserDto;
      const newUser = this.userRepository.create({
        ...userDto,
        password: bcrypt.hashSync( password, 10 ),
        roles: roles.join(',')
      });
      const user = await this.userRepository.save(newUser);
      delete user.password;
      return {
        ...user,
        roles: user.roles?.split(','),
        token: this.getJwtToken({id: user.id })
      };
    } catch (error) {
      this.handleDBErrors(error)
    }
  }
  
  async login(loginDto: LoginUserDto) {
    
    const {email, password} = loginDto;

    const user = await this.userRepository.findOne({
      where: { email },
      select: { id:true, email: true, password: true }
    })

    if ( !user || !bcrypt.compareSync( password, user.password ) ) {
      throw new UnauthorizedException(`Credenciales invalidas `)
    }

    delete user.password;

    return {
      ...user,
      roles: user.roles?.split(','),
      token: this.getJwtToken({id: user.id })
    };

  }
  
  //------------------------------------
  //------ Metodos privados
  //-----------------------------------
  private getJwtToken ( payload: JwtPayload ) {
    const access_token = this.jwtService.sign(payload);
    return access_token;
  }

  private handleDBErrors(error : any) : never {
   
    if (error.errno === 19)
      throw new BadRequestException(`Usuario ya registrado.`);

    throw new InternalServerErrorException(`Porfavor verificar log del servidor`);
  }
  
}
