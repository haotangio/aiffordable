import {Typography} from "@mui/material";
import {KickOffForm} from "@aiffordable/system-management/components";
import {PaperCard} from "@aiffordable/design-system/components";

export default function SetupPage() {
  return (
    <PaperCard sx={{width: { sm: '100%', md: '50%'}}}>
      <Typography variant="h6">Please setup your workspace.</Typography>
      <KickOffForm />
    </PaperCard>
  );
}
