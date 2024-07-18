import * as React from "react";
import {FormControl, Input, InputAdornment} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

export function PromptInput({onSubmit}) {
  return (
    <FormControl sx={{ m: 1 }} variant="outlined" fullWidth hiddenLabel>
      <Input
        fullWidth
        placeholder="Type something ..."
        type={'textarea'}
        multiline
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={(e) => {
              onSubmit({message: 'How to publish a book on amazon as indenpendent author?'});
            }}>
              <SendIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
