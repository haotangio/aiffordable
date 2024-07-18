import * as React from "react";
import {Box, Stack} from "@mui/material";

const messages = [
  {message: "My company is a software component that are looking for strategic partner in oversea markets to act as sales and engagement directors to find and follow with clients in each market. ", sender: "user"},
  {message: "We are looking for partners who are interested in building a long-term relationship with us. ", sender: "user"},
  {message: "My company is a software component that are looking for strategic partner in oversea markets to act as sales and engagement directors to find and follow with clients in each market. ", sender: "user"},
  {message: "We are looking for partners who are interested in building a long-term relationship with us. ", sender: "user"},
  {message: "My company is a software component that are looking for strategic partner in oversea markets to act as sales and engagement directors to find and follow with clients in each market. ", sender: "user"},
  {message: "We are looking for partners who are interested in building a long-term relationship with us. ", sender: "user"},
  {message: "My company is a software component that are looking for strategic partner in oversea markets to act as sales and engagement directors to find and follow with clients in each market. ", sender: "user"},
  {message: "We are looking for partners who are interested in building a long-term relationship with us. ", sender: "user"},
  {message: "My company is a software component that are looking for strategic partner in oversea markets to act as sales and engagement directors to find and follow with clients in each market. ", sender: "user"},
  {message: "We are looking for partners who are interested in building a long-term relationship with us. ", sender: "user"},
  {message: "My company is a software component that are looking for strategic partner in oversea markets to act as sales and engagement directors to find and follow with clients in each market. ", sender: "user"},
  {message: "We are looking for partners who are interested in building a long-term relationship with us. ", sender: "user"},
  {message: "My company is a software component that are looking for strategic partner in oversea markets to act as sales and engagement directors to find and follow with clients in each market. ", sender: "user"},
  {message: "We are looking for partners who are interested in building a long-term relationship with us. ", sender: "user"},
  {message: "My company is a software component that are looking for strategic partner in oversea markets to act as sales and engagement directors to find and follow with clients in each market. ", sender: "user"},
  {message: "We are looking for partners who are interested in building a long-term relationship with us. ", sender: "user"},
  {message: "My company is a software component that are looking for strategic partner in oversea markets to act as sales and engagement directors to find and follow with clients in each market. ", sender: "user"},
  {message: "We are looking for partners who are interested in building a long-term relationship with us. ", sender: "user"},
];

export function ChatMessageList() {
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
