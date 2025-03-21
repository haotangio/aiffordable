import {Button, Stack, TextField} from "@mui/material";

export function ResetPasswordForm() {
  return (
    <Stack direction="column" spacing={2}>
      <TextField label="Password" />
      <TextField label="Confirm password" />
      <Button variant="contained">Submit</Button>
    </Stack>
  )
}
