import {Button, Stack, TextField} from "@mui/material";

export function ForgetPasswordForm() {
  return (
    <Stack direction="column" spacing={2}>
      <TextField label="Email" />
      <Button variant="contained">Submit</Button>
    </Stack>
  )
}
