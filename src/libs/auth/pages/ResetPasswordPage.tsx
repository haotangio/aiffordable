import {Typography} from "@mui/material";
import {PaperCard} from "@libs/design-system/components";
import {ResetPasswordForm} from "../components";

export function ResetPasswordPage() {
  return (
    <PaperCard sx={{width: { sm: '100%', md: '30%'}}}>
      <Typography variant="h5" mb={3}>Set new password</Typography>
      <ResetPasswordForm />
    </PaperCard>
  );
}
