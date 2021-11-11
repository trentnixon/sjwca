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


import Link from 'next/link'
import { useRouter } from 'next/router';
import navStyles from '../styles/Nav.module.css';


export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const router = useRouter();
  const Nav = [
    {
        label:'Home',
        url:'/'
    }, {
        label:'The 2022 Season',
        url:'/2022season'
    }, {
        label:'Register a Team',
        url:'/registerTeam'
    }, {
        label:'Register an Individual',
        url:'/registerIndividual'
    }, {
        label:'About SJWCA',
        url:'/about'
    }
]



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
        {Nav.map((text, index) => (
             <ListItem button key={text}>
             <ListItemIcon>
               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
             </ListItemIcon>
                    <Link href={text.url}  >
                        <a className={router.pathname == text.url ? navStyles.active : navStyles.a}>
                            <ListItemText primary={text.label} />
                        </a>
                    </Link>
           </ListItem>
        ))}
      </List>
     
    </Box>
  );




  return (
    <div>
      {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{`Menu`}</Button>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}


/*
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
*/