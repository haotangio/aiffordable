import {useState} from "react";
import {Box, Container} from "@mui/material";
import {ChatMessageList} from "./ChatMessageList";
import {PromptInput} from "./PromptInput";
import {submitPrompt} from "@libs/chat/server-actions/chatActions";

export function ChatWindow() {
  const [messages, setMessages] = useState<{message: string}[]>([]);

  const handlePromptSubmission = async ({message}: {message: string}) => {
    appendMessage(message);
    // const respMsg = await askChatGPT({message});
    const respMsg = await submitPrompt(message, {aiName: 'openai', model: 'gpt-3.5-turbo'});
    appendMessage(respMsg);
  }

  const appendMessage = (message: string) => {
    setMessages(prevMessages => [...prevMessages, {message}]);
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
