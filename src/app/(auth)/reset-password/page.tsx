import {Typography} from "@mui/material";
import {PaperCard} from "@libs/common/design-system";
import {ResetPasswordForm} from "@libs/main/auth";

export default function ResetPasswordPage() {
  return (
    <PaperCard sx={{width: { sm: '100%', md: '30%'}}}>
      <Typography variant="h5" mb={3}>Set new password</Typography>
      <ResetPasswordForm />
    </PaperCard>
  );
}
