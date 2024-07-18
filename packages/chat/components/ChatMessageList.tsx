import * as React from "react";
import {Box, Stack} from "@mui/material";
import Markdown from 'react-markdown';

export function ChatMessageList({messages}) {
  return (
    <Stack sx={{height: '100%', overflowY: 'scroll'}}>
      {messages.map(({message}, index) => (
        <Box key={index} sx={{
          // textAlign: index % 2 === 0 ? 'left' : 'right',
          backgroundColor: index % 2 === 1 ? 'inherit' : 'grey.100',
        }}>
          <Markdown>{message}</Markdown>
        </Box>
      ))}
    </Stack>
  );
}
