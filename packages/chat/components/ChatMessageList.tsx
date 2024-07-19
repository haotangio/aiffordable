import * as React from "react";
import {Box, Stack} from "@mui/material";
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export function ChatMessageList({messages}: {messages: {message: string}[]}) {
  return (
    <Stack sx={{height: '100%', overflowY: 'scroll'}}>
      {messages.map(({message}, index) => (
        <Box key={index} sx={{
          paddingX: 1,
          backgroundColor: index % 2 === 0 ? 'grey.100' : 'inherit',
        }}>
          <Markdown>{message}</Markdown>
        </Box>
      ))}
    </Stack>
  );
}
