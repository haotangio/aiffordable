import * as React from "react";
import {Box, Stack} from "@mui/material";
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism';

export function ChatMessageList({messages}: {messages: {message: string}[]}) {
  return (
    <Stack sx={{height: '100%', overflowY: 'scroll'}}>
      {messages.map(({message}, index) => (
        <Box key={index} sx={{
          paddingX: 1,
          backgroundColor: index % 2 === 0 ? 'grey.100' : 'inherit',
        }}>
          <ReactMarkdown
            children={message}
            components={{
              code(props) {
                const {children, className, node, ...rest} = props
                const match = /language-(\w+)/.exec(className || '')
                return match ? (
                  <SyntaxHighlighter
                    {...rest}
                    PreTag="div"
                    children={String(children).replace(/\n$/, '')}
                    language={match[1]}
                    style={dark}
                  />
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                )
              }
            }}
          />
        </Box>
      ))}
    </Stack>
  );
}
