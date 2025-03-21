import {CssBaseline} from "@mui/material";
import {ThemeProvider} from '@mui/material/styles';
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {theme} from "./theme";

export function AiffordableRootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
