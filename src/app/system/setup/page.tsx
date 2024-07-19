import {Typography} from "@mui/material";
import {SystemSetupForm} from "@libs/system/components";
import {PaperCard} from "@libs/design-system/components";

export default function SetupPage() {
  return (
    <PaperCard sx={{width: { sm: '100%', md: '30%'}}}>
      <Typography variant="h5" mb={3}>Setup your workspace.</Typography>
      <SystemSetupForm />
    </PaperCard>
  );
}
