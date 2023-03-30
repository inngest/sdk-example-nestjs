import { inngest } from '../client';

export const helloWorld = inngest.createFunction(
  { name: 'Hello World' },
  { event: 'test/hello.world' },
  async ({ event }) => {
    console.log(`EVENT DATA`, event.data);
    return;
  },
);
