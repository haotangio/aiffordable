import {useCallback, useState} from "react";
import {Box, Container} from "@mui/material";
import {askChatGPT} from "../../../src/app/actions";
import {ChatMessageList} from "../components/ChatMessageList";
import {PromptInput} from "../components/PromptInput";

export function ChatWindow() {
  const [messages, setMessages] = useState<{message: string}[]>([]);

  const handlePromptSubmission = async ({message}: {message: string}) => {
    appendMessage(message);
    const resp = await askChatGPT({message});
    appendMessage(resp.message as string);
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
