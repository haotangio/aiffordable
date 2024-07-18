import {Box, Button, Stack, Typography} from "@mui/material";
import Link from "next/link";
import {PaperCard} from "@aiffordable/design-system/components";

export default function Home() {
  return (
    <PaperCard>
      <Typography variant="h5">Welcome to AIffordable</Typography>
      <Stack mt={3} direction="column" spacing={2}>
        <Link href="/login">
          <Button component="a" variant="contained" fullWidth>Login</Button>
        </Link>
        <Link href="/chat">
          <Button component="a" variant="contained" fullWidth>Go to Chat</Button>
        </Link>
      </Stack>
    </PaperCard>
  );
}
