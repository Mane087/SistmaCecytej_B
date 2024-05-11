import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RecursosHumanosDto } from './dto/RecursosHumanos.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() recursosHumanos: RecursosHumanosDto) {
    return this.authService.login(recursosHumanos);
  }

}
