import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './DTO/createUser.dto';

@Controller('users')
export class UsersController {
    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        return 'This action adds a new user'
    }

    @Get()
    findAll(): string {
        return 'This action returns all users'
    }
}