'use client';
import * as React from "react";
import {Box} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import {ChatWindow} from "@aiffordable/chat/components";

export const maxDuration = 60;

export default function ChatPage() {
  return (
    <Box sx={{minHeight: '100vh', flex: 1, display: 'flex', flexDirection: 'column'}}>
      <Toolbar />
      <ChatWindow />
    </Box>
  );
}
