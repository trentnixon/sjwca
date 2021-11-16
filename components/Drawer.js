import * as React from 'react';


import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Link from 'next/link'
import { useRouter } from 'next/router';
import navStyles from '../styles/Nav.module.css';

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HelpIcon from '@mui/icons-material/Help';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
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
      label:'Play Cricket in 2022',
      url:'/',
      Icon:<SportsCricketIcon />
    },{
      label:'Register a Team',
      url:'/registerTeam',
      Icon:<GroupIcon />
    },{
      label:'Register an Individual',
      url:'/registerIndividual',
      Icon:<PersonIcon />
    },{
      label:'Regions we Play',
      url:'/regions',
      Icon:<EditLocationAltIcon />
    },{
      label:'SJWCA Grounds',
      url:'/grounds',
      Icon:<SportsCricketIcon />
    },{
      label:'About SJWCA',
      url:'/about',
      Icon:<HelpIcon />
  }
]


/*
,{
      label:'Winter 2022',
      url:'/2022season',
      Icon:<AcUnitIcon />
    }
*/
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
          <Link href={text.url}  >
            <ListItem button key={text}>
                <ListItemIcon>
                <div className={router.pathname == text.url ? navStyles.active : navStyles.a} >{text.Icon}</div>
                </ListItemIcon>
                  <a className={router.pathname == text.url ? navStyles.active : navStyles.a}>
                      <ListItemText primary={text.label} />
              </a>
            </ListItem>
          </Link>
        ))}
      </List>
     
    </Box>
  );




  return (
    <div>
      {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className={navStyles.NavBtn} onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </Button>

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