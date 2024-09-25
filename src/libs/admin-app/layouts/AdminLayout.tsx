import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import BackIcon from '@mui/icons-material/ArrowBack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from "next/link";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import {useRouter} from "next/navigation";

const drawerWidth = 240;

const aiTools = [
  {
    id: 'users',
    label: 'Users',
    url: '/admin/users',
  },
  {
    id: 'tools',
    label: 'Tools',
    url: '/admin/ai-tools',
  },
  {
    id: 'settings',
    label: 'Settings',
    url: '/admin/settings',
  },
];

function useAuth() {
  return {
    user: {
      name: 'John Doe',
      email: 'john@gmail.com',
      role: 'admin',
    }
  };
}

export function AdminLayout(props: Readonly<{
  children: React.ReactNode;
}>) {
  const {user} = useAuth();
  const router = useRouter();
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

  const backToChatApp = () => {
    router.push('/chat');
  };

  const drawer = (
    <Box>
      <AppBar color="inherit" elevation={0} position="sticky" sx={{ left: 0, width: `${drawerWidth}px`}}>
        <Toolbar disableGutters>
          <IconButton onClick={backToChatApp}>
            <BackIcon />
          </IconButton>
          <Typography variant="h6">
            Admin
          </Typography>
        </Toolbar>
        <Divider />
      </AppBar>
      <List>
        {aiTools.map(({id, label, url}) => (
          <Link href={url} key={id} style={{
            textDecoration: 'none',
            color: 'inherit',
          }}>
            <ListItem disablePadding>
              <ListItemButton>
                {/*<ListItemIcon>*/}
                {/*  <img height="24" width="24" src={logo} alt="AI tool logo"/>*/}
                {/*</ListItemIcon>*/}
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
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
            Users
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
        <Toolbar />
        <Box p={3}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
