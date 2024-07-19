import {useState} from "react";
import {Box, Container} from "@mui/material";
import {askChatGPT} from "../actions";
import {ChatMessageList} from "./ChatMessageList";
import {PromptInput} from "./PromptInput";

export function ChatWindow() {
  const [messages, setMessages] = useState<{message: string}[]>([]);

  const handlePromptSubmission = async ({message}: {message: string}) => {
    appendMessage(message);
    const respMsg = await askChatGPT({message});
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
