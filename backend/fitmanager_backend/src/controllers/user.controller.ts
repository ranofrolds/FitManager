import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get(':id')
  async findById(@Param('id') id: string) {;
    return this.usersService.buscarUserPorId(id);
  }

}