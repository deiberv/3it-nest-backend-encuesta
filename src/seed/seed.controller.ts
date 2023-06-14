import { Controller, Post } from '@nestjs/common';
import { SeedService } from './seed.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Seed')
@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}
  @Post()
  @ApiOkResponse({ status: 200, description: "Data cargada" })
  runSeed() {
    return this.seedService.populateDB();
  }
}
