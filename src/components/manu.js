import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import logo from "../assets/Logo.webp";
import { Link } from 'react-router-dom';

const drawerWidth = '16%';

function SystemMenu(props) {


  const drawer = (
    <div>
     <Link to="/"><img style={{width:"100%"}} src={logo} alt="Empowering enegery"/></Link> 
      <Divider />
      <List>
        {[{name:'Daily Expencess',path:'/DailyExpencess'}, {name:'Daily Labour',path:'/UnderConstraction'}, {name:'Request Money',path:'/UnderConstraction'}].map((text, index) => (
          <ListItem key={text.name} disablePadding>
         <Link style={{width:"100%",textDecoration:"none",color:'rgba(0, 0, 0, 0.54)'}} to={text.path}>
         <ListItemButton >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
         </Link>

          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
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
    </Box>
  );
}


export default SystemMenu;