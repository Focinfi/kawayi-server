import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { startIndexer } from './indexer/indexer';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

startIndexer();

bootstrap();
