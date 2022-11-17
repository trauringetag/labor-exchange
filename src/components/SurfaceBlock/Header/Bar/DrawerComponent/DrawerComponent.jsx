import classes from './DrawerComponent.module.scss';
import * as React from "react";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import {NavLink} from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import NewspaperIcon from "@mui/icons-material/Newspaper";

const setActive = ({ isActive }) => isActive ? `${classes.link} ${classes.active}` : classes.link;

const DrawerComponent = () => {
    const [state, setState] = React.useState({ left: false });

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
            </List>
            <Divider />
            <List>
                <ListItem key={'Новости'} disablePadding>
                    <NavLink to={'/news'} className={setActive}>
                        <ListItemButton>
                            <ListItemIcon>
                                <NewspaperIcon className={classes.icon} />
                            </ListItemIcon>
                            <ListItemText primary={'Новости'} />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <React.Fragment key={'left'}>
            <Button className={classes.button}
                    onClick={toggleDrawer('left', true)}
            >
                <MenuIcon fontSize={'medium'} />
            </Button>
            <SwipeableDrawer
                anchor={'left'}
                className={classes.wrapper}
                open={state['left']}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
            >
                {list('left')}
            </SwipeableDrawer>
        </React.Fragment>
    );
};
export default DrawerComponent;