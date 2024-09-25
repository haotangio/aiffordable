'use client';
import {Button, Stack, TextField} from "@mui/material";
import {createFirstAdmin} from "@aiffordable/workspace-manager/actions";

export function SystemSetupForm() {
  const onSubmit = async () => {
    const user = await createFirstAdmin(
      {
        token: 'saefsadfasdfsadfdsaf',
        email: 'haotang.io@gmail.com',
        password: 'password',
      }
    );
    alert(user.email);
  };

  return (
    <Stack direction="column" spacing={2}>
      <TextField label="Full Name" />
      <TextField label="Email" />
      <TextField label="Password" />
      <TextField label="Confirm Password" />
      <Button variant="contained" onClick={onSubmit}>Submit</Button>
    </Stack>
  )
}
