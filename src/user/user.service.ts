import { Injectable } from '@nestjs/common';
import { HelloService } from '../hello/hello.service.js';

@Injectable()
export class UserService {
    constructor(private readonly helloService: HelloService) { }

    getAllUsers() {
        return [
            {
                id: 1,
                name: "Bappy",
            },
            {
                id: 2,
                name: "Rakib",
            },
            {
                id: 3,
                name: "Tamim",
            }
        ]
    }

    getUserById(id: number) {
        const user = this.getAllUsers().find(user => user.id === id)
        return user;
    }

    getWelcomeMessage(userId: number) {
        const user = this.getUserById(userId);
        if (!user) {
            return "User not found"
        }
        const message = this.helloService.getHelloWithName(user.name);
        return message;
    }
}
