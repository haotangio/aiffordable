import {useState} from "react";
import {Box, Container} from "@mui/material";
import {useSearchParams} from 'next/navigation';
import {submitPrompt} from "@libs/chat-app/actions";
import {ChatMessageList, MessageBody} from "./ChatMessageList";
import {PromptInput} from "./PromptInput";

export function ChatWindow() {
  const [messages, setMessages] = useState<MessageBody[]>([]);
  const searchParams = useSearchParams();

  const handlePromptSubmission = async ({message}: {message: string}) => {
    appendMessage({content: message});
    const provider = searchParams.get('provider') as string;
    const model = searchParams.get('model') as string;
    const {content, url} = await submitPrompt(message, {provider: provider, model});
    appendMessage({content, url});
  }

  const appendMessage = (message: MessageBody) => {
    setMessages(prevMessages => [...prevMessages, message]);
  };

  return (
    <Container sx={{flex: 1, display: 'flex', flexDirection: 'column'}}>
      <Box sx={{flexGrow: 1}}>
        <ChatMessageList messages={messages} />
      </Box>
      <PromptInput onSubmit={handlePromptSubmission} />
    </Container>
  )
}
