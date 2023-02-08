import classes from './DrawerComponent.module.scss';
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { NavLink } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import DescriptionIcon from '@mui/icons-material/Description';
import ModeIcon from '@mui/icons-material/Mode';
import GavelIcon from '@mui/icons-material/Gavel';
import { useState, Fragment } from "react";

const setActive = ({ isActive }) => isActive ? `${classes.link} ${classes.active}` : classes.link;

const DrawerComponent = () => {
    const [state, setState] = useState({ left: false });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role={'presentation'}
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            component={'section'}
        >
            <List>
                <ListItem key={'Главная'} disablePadding>
                    <NavLink to={'/'} className={setActive}>
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeIcon className={classes.icon} />
                            </ListItemIcon>
                            <ListItemText primary={'Главная'} />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem key={'О нас'} disablePadding>
                    <NavLink to={'/about'} className={setActive}>
                        <ListItemButton>
                            <ListItemIcon>
                                <DescriptionIcon className={classes.icon} />
                            </ListItemIcon>
                            <ListItemText primary={'О нас'} />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem key={'Законодательство'} disablePadding>
                    <NavLink to={'/legislation'} className={setActive}>
                        <ListItemButton>
                            <ListItemIcon>
                                <GavelIcon className={classes.icon} />
                            </ListItemIcon>
                            <ListItemText primary={'Законодательство'} />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem key={'Опросники'} disablePadding>
                    <NavLink to={'/questionnaires'} className={setActive}>
                        <ListItemButton>
                            <ListItemIcon>
                                <ModeIcon className={classes.icon} />
                            </ListItemIcon>
                            <ListItemText primary={'Опросники'} />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
            </List>
        </Box>
    );

    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

    return (
        <Fragment key={'left'}>
            <Button className={classes.button}
                    onClick={toggleDrawer('left', true)}
            >
                <MenuIcon fontSize={'medium'} />
            </Button>
            <SwipeableDrawer
                anchor={'left'}
                className={classes.wrapper}
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={state['left']}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
            >
                {list('left')}
            </SwipeableDrawer>
        </Fragment>
    );
};
export default DrawerComponent;