import * as React from "react";
import {Box, Stack} from "@mui/material";

export function ChatMessageList({messages}) {
  return (
    <Stack sx={{height: '100%', overflowY: 'scroll'}}>
      {messages.map(({message}, index) => (
        <Box key={index} sx={{
          textAlign: index % 2 === 0 ? 'left' : 'right',
          backgroundColor: index % 2 === 0 ? 'inherit' : 'grey.100',
        }}>
          {message}
        </Box>
      ))}
    </Stack>
  );
}
