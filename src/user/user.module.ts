import { Module } from '@nestjs/common';
import { UserController } from './user.controller.js';
import { UserService } from './user.service.js';
import { HelloModule } from '../hello/hello.module.js';

@Module({
  imports: [HelloModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule { }
