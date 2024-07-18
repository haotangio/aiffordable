import {Typography} from "@mui/material";
import {PaperCard} from "@aiffordable/design-system/components";
import {LoginForm} from "@aiffordable/auth/components";

export default function LoginPage() {
  return (
    <PaperCard sx={{width: { sm: '100%', md: '30%'}}}>
      <Typography variant="h5" mb={3}>Login</Typography>
      <LoginForm />
    </PaperCard>
  );
}
