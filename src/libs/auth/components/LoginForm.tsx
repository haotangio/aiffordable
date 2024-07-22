import {Button, Stack, TextField} from "@mui/material";

export function LoginForm() {
  return (
    <Stack direction="column" spacing={2}>
      <TextField label="Email" />
      <TextField label="Password" />
      <Button variant="contained">Login</Button>
    </Stack>
  )
}
