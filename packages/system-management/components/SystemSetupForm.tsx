import {Button, Stack, TextField} from "@mui/material";

export function SystemSetupForm() {
  return (
    <Stack direction="column" spacing={2}>
      <TextField label="Full Name" />
      <TextField label="Email" />
      <TextField label="Password" />
      <TextField label="Confirm Password" />
      <Button variant="contained">Submit</Button>
    </Stack>
  )
}
