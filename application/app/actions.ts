'use server';

import { streamText } from 'ai';
import { createStreamableValue } from 'ai/rsc';
import { createGoogleGenerativeAI } from '@ai-sdk/google'

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const google = createGoogleGenerativeAI({
  apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
})

const model = google('models/gemini-1.5-flash-latest');


export async function continueConversation(history: Message[]) {
  'use server';

  const stream = createStreamableValue();

  (async () => {
    const { textStream } = await streamText({
      model: model,
      system:
        `You are a vet. You identify and provide firstaid instructions for injury and accidents in animals.` +
        `You walk through the process of administering firstaid based on user input, Keep your instructions step by step and short`,
      messages: history,
      maxTokens: 800,
      temperature: 1.1
    });

    for await (const text of textStream) {
      stream.update(text);
    }

    stream.done();
  })();

  return {
    messages: history,
    newMessage: stream.value,
  };
}