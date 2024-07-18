import * as React from "react";
import {Box, Container, FormControl, Input, InputAdornment, Stack} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";

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
export default function ChatPage() {
  return (
    <Box sx={{minHeight: '100vh', flex: 1, display: 'flex', flexDirection: 'column'}}>
      <Toolbar />
      <Container sx={{flex: 1, display: 'flex', flexDirection: 'column'}}>
        <Box sx={{flexGrow: 1}}>
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
        </Box>
        <FormControl sx={{ m: 1 }} variant="outlined" fullWidth hiddenLabel>
          <Input
            fullWidth
            placeholder="Type something ..."
            type={'textarea'}
            multiline
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Container>
    </Box>
  );
}
