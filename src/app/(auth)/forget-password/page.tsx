import {Typography} from "@mui/material";
import {PaperCard} from "@libs/common/design-system";
import {ForgetPasswordForm} from "@libs/main/auth";

export function ForgetPasswordPage() {
  return (
    <PaperCard sx={{width: { sm: '100%', md: '30%'}}}>
      <Typography variant="h5" mb={3}>Forget password</Typography>
      <ForgetPasswordForm />
    </PaperCard>
  );
}
