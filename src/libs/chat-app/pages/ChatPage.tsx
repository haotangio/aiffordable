'use client';
import {Box} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import {ChatWindow} from "@libs/chat-app/components";

export const maxDuration = 60;

export function ChatPage() {
  return (
    <Box sx={{minHeight: '100vh', flex: 1, display: 'flex', flexDirection: 'column'}}>
      <Toolbar />
      <ChatWindow />
    </Box>
  );
}
