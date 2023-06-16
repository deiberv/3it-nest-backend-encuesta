import { Controller, Post } from '@nestjs/common';
import { SeedService } from './seed.service';
import { ApiBearerAuth, ApiForbiddenResponse, ApiOkResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators';
import { ValidRoles } from 'src/auth/interfaces';

@ApiTags('Seed')
@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}
  
  //-----------------------------------------------------------------
  //----- Metodos Publicos ------------------------------------------
  //-----------------------------------------------------------------
  @Post()
  @ApiOperation({ 
    description: 'Cargar data seed',
    summary: "Para ejecutar esta accion es necesario iniciar session con un usuario de role ROLE_ADMIN"
  })
  @ApiOkResponse({ description: "Data cargada" })
  @ApiUnauthorizedResponse({description: "Unauthorized" })
  @ApiForbiddenResponse({description: "Forbidden" })
  @ApiBearerAuth()
  @Auth(ValidRoles.ADMIN)
  runSeed() {
    return this.seedService.populateDB();
  }
}
