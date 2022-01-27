import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Container, Typography } from '@mui/material';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        
          <ListItem >
            <ListItemIcon>
            <InboxIcon /> 
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem>
          <ListItemIcon>
            <MailIcon /> 
            </ListItemIcon>
            <ListItemText primary="Mail" />
          </ListItem>
 
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <AppBar position='static'>
            <Container maxWidth='x1'>
                <Box sx={{ flexGrow: 3}}>
                  <Button onClick={toggleDrawer(anchor, true)}><MenuIcon/></Button>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </Box>
                <Box>
                  <Typography sx={{ align:'center', display: { xs: 'flex', md: 'flex'} }}>HE</Typography>
                </Box>
                <Box sx={{ flexGrow: 3}}>

                </Box>
          </Container>
          </AppBar>
        </React.Fragment>
      ))}
      
    </div>

  );
}
