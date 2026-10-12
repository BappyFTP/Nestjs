import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';

//root file

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });

  //global settings
  //env config
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
