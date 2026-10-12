import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
    getHello(): string {
        return 'Hello from nest js!';
    }

    getHelloWithName(name: string): string {
        return `Hello ${name}!`;
    }


}
