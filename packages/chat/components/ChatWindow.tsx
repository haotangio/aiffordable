import * as React from "react";
import {Box, Container} from "@mui/material";
import {askChatGPT} from "../../../src/app/actions";
import {ChatMessageList} from "../components/ChatMessageList";
import {PromptInput} from "../components/PromptInput";

export function ChatWindow() {
  return (
    <Container sx={{flex: 1, display: 'flex', flexDirection: 'column'}}>
      <Box sx={{flexGrow: 1}}>
        <ChatMessageList />
      </Box>
      <PromptInput onSubmit={async ({message}) => {
        const {response} = await askChatGPT({message});
        console.log('response', response);
      }} />
    </Container>
  )
}