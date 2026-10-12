import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller.js';
import { HelloService } from './hello.service.js';

@Module({
  controllers: [HelloController],
  providers: [HelloService],
  imports: [],// import other module if needed
  exports: [] // export other module if needed
}
)
export class HelloModule { }