import {Typography} from "@mui/material";
import {PaperCard} from "@libs/common/design-system";
import {LoginForm} from "@libs/domain/auth/components";

export function LoginPage() {
  return (
    <PaperCard sx={{width: { sm: '100%', md: '30%'}}}>
      <Typography variant="h5" mb={3}>Login</Typography>
      <LoginForm />
    </PaperCard>
  );
}
