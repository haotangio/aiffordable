import {Paper, PaperProps} from "@mui/material";

export function PaperCard({ children, sx, ...rest }: PaperProps) {
  return (
    <Paper {...rest} sx={{ padding: 3, ...sx }} elevation={3}>
      {children}
    </Paper>
  );
}
