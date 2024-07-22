/* eslint-disable react/no-children-prop */
import * as React from "react";
import {Box, Stack} from "@mui/material";
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism';

export interface MessageBody {
  content?: string;
  url?: string;
}
export function ChatMessageList({messages}: {messages: MessageBody[]}) {
  return (
    <Stack sx={{height: '100%', overflowY: 'scroll'}}>
      {messages.map(({content, url}, index) => (
        <Box key={index} sx={{
          paddingX: 1,
          backgroundColor: index % 2 === 0 ? 'grey.100' : 'inherit',
          mb: 3,
        }}>
          {content && (
            <ReactMarkdown
              children={content}
              components={{
                code(props) {
                  const {children, className, node, ref, ...rest} = props
                  const match = /language-(\w+)/.exec(className || '')
                  return match ? (
                    <SyntaxHighlighter
                      {...rest}
                      PreTag="div"
                      ref={ref as React.LegacyRef<SyntaxHighlighter>}
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
          )}
          {url && (
            <img src={url} alt="Generated image" />
          )}
        </Box>
      ))}
    </Stack>
  );
}
