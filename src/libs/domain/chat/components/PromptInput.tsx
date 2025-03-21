import * as React from "react";
import {FormControl, Input, InputAdornment} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

interface Props {
  onSubmit: ({message}: {message: string}) => unknown;
}
export function PromptInput({onSubmit}: Props) {
  const [message, setMessage] = React.useState('');

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (message) {
      onSubmit({message});
      setMessage('');
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <FormControl sx={{ m: 1 }} variant="outlined" fullWidth hiddenLabel>
        <Input
          fullWidth
          placeholder="Type something ..."
          type={'textarea'}
          multiline
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton type="submit" color="primary">
                <SendIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
  );
}
