import {Box} from "@mui/material";

export function FullscreenCenterLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Box justifyContent="center" alignItems="center" display="flex" minHeight="100vh" minWidth="100vw">
      {children}
    </Box>
  );
}