'use client';
import {Button, Stack, TextField} from "@mui/material";
import {createFirstAdmin} from "@aiffordable/workspace-manager/actions";

export function SystemSetupForm() {
  const onSubmit = async () => {
    try {
      const user = await createFirstAdmin(
        {
          token: 'd1t3ams.com',
          email: 'haotang.io@gmail.com',
          password: '12345678',
        }
      );
      alert('User created', user.email);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <Stack direction="column" spacing={2}>
      <TextField label="System password" />
      <TextField label="Full Name" />
      <TextField label="Email" />
      <TextField label="Password" />
      <TextField label="Confirm Password" />
      <Button variant="contained" onClick={onSubmit}>Finish</Button>
    </Stack>
  );
}
