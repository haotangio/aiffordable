import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function askChatGPT({message}) {
  const messages = [{role: "user", content: message}];

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
    });

    console.log(response.choices[0].message.content);
    return {response: response.choices[0].message.content};
  } catch (e) {
    console.error(e);
  }
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
