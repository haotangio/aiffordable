import {Typography} from "@mui/material";
import {PaperCard} from "@libs/design-system/components";
import {ForgetPasswordForm} from "../components";

export function ForgotPasswordPage() {
  return (
    <PaperCard sx={{width: { sm: '100%', md: '30%'}}}>
      <Typography variant="h5" mb={3}>Forget password</Typography>
      <ForgetPasswordForm />
    </PaperCard>
  );
}
