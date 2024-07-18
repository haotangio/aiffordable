'use server';

import * as chatServices from '@aiffordable/chat/services';

export async function askChatGPT({message}: {message: string}) {
  const msgContent = await chatServices.askChatGPT({message});
  return { message: msgContent };
}
