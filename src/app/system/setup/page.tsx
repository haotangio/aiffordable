import {Typography} from "@mui/material";
import {KickOffForm} from "@aiffordable/system-management/components";
import {PaperCard} from "@aiffordable/design-system/components";

export default function SetupPage() {
  return (
    <PaperCard sx={{width: { sm: '100%', md: '30%'}}}>
      <Typography variant="h5" mb={3}>Setup your workspace.</Typography>
      <KickOffForm />
    </PaperCard>
  );
}
