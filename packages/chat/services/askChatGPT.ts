import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const MODEL = 'gpt-4o';
// const MODEL = 'gpt-3.5-turbo';

export async function askChatGPT({message}: {message: string}) {
  const response = await openai.chat.completions.create({
    model: MODEL,
    messages: [{role: "user", content: message}],
  });

  console.log(response.choices[0].message.content);
  return response.choices[0].message.content;
}

// example resp
// {
//   id: 'chatcmpl-9mLkNPu8jg38xaA2TznwS2QJApXyT',
//     object: 'chat.completion',
//   created: 1721310367,
//   model: 'gpt-3.5-turbo-0125',
//   choices: [
//   {
//     index: 0,
//     message: [Object],
//     logprobs: null,
//     finish_reason: 'stop'
//   }
// ],
//   usage: { prompt_tokens: 21, completion_tokens: 372, total_tokens: 393 },
//   system_fingerprint: null
// }
