import { serve } from 'inngest/express';
import { inngest } from './client';
import { helloWorld } from './fns/helloWorld';

export const handler = serve(inngest, [helloWorld], {
  logLevel: 'debug',
}) as any;
