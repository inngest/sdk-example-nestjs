import { NestFactory } from '@nestjs/core';
import { Inngest } from 'inngest';
import { serve } from 'inngest/express';
import { AppModule } from './app.module';

export const inngest = new Inngest({
  name: `Operations Service`,
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
    rawBody: true,
    bodyParser: true,
  });

  app.use('/api/inngest', serve(inngest, []));

  await app.listen(3000);
}
bootstrap();
