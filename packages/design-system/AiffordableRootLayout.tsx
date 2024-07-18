'use client';
import {CssBaseline} from "@mui/material";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const defaultTheme = createTheme();

export function AiffordableRootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
