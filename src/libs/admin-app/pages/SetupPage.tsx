import {Typography} from "@mui/material";
import {PaperCard} from "@libs/design-system/components";
import {SystemSetupForm} from "../components";

export default function SetupPage() {
  return (
    <PaperCard sx={{width: { sm: '100%', md: '30%'}}}>
      <Typography variant="h5" mb={3}>Create first admin</Typography>
      <SystemSetupForm />
    </PaperCard>
  );
}
