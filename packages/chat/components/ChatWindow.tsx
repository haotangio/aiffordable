import {useState} from "react";
import {Box, Container} from "@mui/material";
import {askChatGPT} from "../../../src/app/actions";
import {ChatMessageList} from "../components/ChatMessageList";
import {PromptInput} from "../components/PromptInput";

export function ChatWindow() {
  const [messages, setMessages] = useState([]);

  return (
    <Container sx={{flex: 1, display: 'flex', flexDirection: 'column'}}>
      <Box sx={{flexGrow: 1}}>
        <ChatMessageList messages={messages} />
      </Box>
      <PromptInput onSubmit={async ({message}) => {
        const resp = await askChatGPT({message});
        console.log(resp);
        setMessages([...messages, {message: resp.message}]);
      }} />
    </Container>
  )
}