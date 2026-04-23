import { Injectable } from '@nestjs/common';
import { User } from './Interfaces/users.interface';

@Injectable()
export class UsersService {
    private readonly users: User[] = [];

   async create(user: User): Promise<User> {
        const newUser = {
            ...user,
            id: this.users.length + 1
        }
        this.users.push(newUser)
        return newUser
    }

    findAll(): User[] {
        return this.users;
    }
}