import * as React from 'react';
import Link from "next/link";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {AiToolList} from "@libs/ai-tool/components";
import {AI_TOOLs} from "@libs/ai-tool/models";

const drawerWidth = 240;

function useAuth() {
  return {
    user: {
      name: 'John Doe',
      email: 'john@gmail.com',
      role: 'admin',
    }
  };
}

export function ChatAppLayout(props: Readonly<{
  children: React.ReactNode;
}>) {
  const {user} = useAuth();
  const { children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <Box>
      <AppBar color="inherit" elevation={0} position="sticky" sx={{ left: 0, width: `${drawerWidth}px`}}>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Typography variant="h6">
            Aiffordable
          </Typography>
          {user.role === 'admin' && (
            <Link href="/admin">
              <IconButton size="small">
                <SettingsIcon sx={{fontSize: 'inherit'}} />
              </IconButton>
            </Link>
          )}
        </Toolbar>
        <Divider />
      </AppBar>
      <AiToolList aiTools={AI_TOOLs} />
      {/*<Divider />*/}
      {/*<List>*/}
      {/*  {['Users', 'AI Tools'].map((text, index) => (*/}
      {/*    <ListItem key={text} disablePadding>*/}
      {/*      <ListItemButton>*/}
      {/*        <ListItemIcon>*/}
      {/*          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
      {/*        </ListItemIcon>*/}
      {/*        <ListItemText primary={text} />*/}
      {/*      </ListItemButton>*/}
      {/*    </ListItem>*/}
      {/*  ))}*/}
      {/*</List>*/}
      {/*<Divider />*/}
      {/*<List>*/}
      {/*  {['General Settings', 'Email settings'].map((text, index) => (*/}
      {/*    <ListItem key={text} disablePadding>*/}
      {/*      <ListItemButton>*/}
      {/*        <ListItemIcon>*/}
      {/*          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
      {/*        </ListItemIcon>*/}
      {/*        <ListItemText primary={text} />*/}
      {/*      </ListItemButton>*/}
      {/*    </ListItem>*/}
      {/*  ))}*/}
      {/*</List>*/}
      {/*<Divider />*/}
      {/*<List>*/}
      {/*  {['Plugins', 'About'].map((text, index) => (*/}
      {/*    <ListItem key={text} disablePadding>*/}
      {/*      <ListItemButton>*/}
      {/*        <ListItemIcon>*/}
      {/*          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
      {/*        </ListItemIcon>*/}
      {/*        <ListItemText primary={text} />*/}
      {/*      </ListItemButton>*/}
      {/*    </ListItem>*/}
      {/*  ))}*/}
      {/*</List>*/}
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Chat GPT 4
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        {children}
      </Box>
    </Box>
  );
}
