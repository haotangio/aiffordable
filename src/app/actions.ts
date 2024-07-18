'use server';

// export {askChatGPT} from '@aiffordable/chat/actions';
import * as actions from '@aiffordable/chat/actions';

export async function askChatGPT({message}) {
  return actions.askChatGPT({message});
}
