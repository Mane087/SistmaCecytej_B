import { Body, Controller, Post, HttpCode, HttpStatus, HttpException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RecursosHumanosDto } from './dto/RecursosHumanos.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async login(@Body() recursosHumanos: RecursosHumanosDto) {
    try {
      const user = await this.authService.login(recursosHumanos);
      return {
        status: HttpStatus.OK,
        message: 'Login exitoso',
        user,
      };
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.UNAUTHORIZED,
        error: 'Credenciales inválidas',
      }, HttpStatus.UNAUTHORIZED);
    }
  }

}
