import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './DTO/createUser.dto';
import { User } from './Interfaces/users.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        this.usersService.create(createUserDto)
    }

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }
}