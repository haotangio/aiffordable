'use server';

export async function listOpenAIModels(): Promise<{id: string}[]> {
  return [
    {
      id: 'gpt-4o'
    },
    {
      id: 'gpt-4o-mini'
    },
    {
      id: 'gpt-3.5-turbo'
    },
    {
      id: 'dall-e-3'
    },
  ]
}
