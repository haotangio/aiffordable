'use client';
import * as React from "react";
import {Box, Container} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import {PromptInput} from "@aiffordable/chat/components/PromptInput";
import {ChatMessageList} from "@aiffordable/chat/components";
import {create} from "../../actions";

export default function ChatPage() {
  return (
    <Box sx={{minHeight: '100vh', flex: 1, display: 'flex', flexDirection: 'column'}}>
      <Toolbar />
      <Container sx={{flex: 1, display: 'flex', flexDirection: 'column'}}>
        <Box sx={{flexGrow: 1}}>
          <ChatMessageList />
        </Box>
        <PromptInput onSubmit={create} />
      </Container>
    </Box>
  );
}
