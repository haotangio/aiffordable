import {Box, TextField} from "@mui/material";

export function KickOffForm() {
  return (
    <Box sx={{
      '& .MuiTextField-root': { m: 1 },
    }}>
      <TextField label="Full Name" fullWidth />
      <TextField label="Email" fullWidth />
      <TextField label="Password" fullWidth />
      <TextField label="Confirm Password" fullWidth />
    </Box>
  )
}
