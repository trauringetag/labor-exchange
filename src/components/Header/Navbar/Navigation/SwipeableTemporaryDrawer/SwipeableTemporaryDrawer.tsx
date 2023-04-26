import * as React from 'react';
import classes from './SwipeableTemporaryDrawer.module.scss';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import GavelIcon from "@mui/icons-material/Gavel";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ModeIcon from "@mui/icons-material/Mode";
import WorkIcon from "@mui/icons-material/Work";
import { FC } from "react";
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${classes.link} ${classes.active}` : classes.link;

const SwipeableTemporaryDrawer: FC = (): JSX.Element => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event && event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) return;
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor: Anchor) => (
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
                <ListItem key={'Новости'} disablePadding>
                    <NavLink to={'/feed'} className={setActive}>
                        <ListItemButton>
                            <ListItemIcon>
                                <NewspaperIcon className={classes.icon} />
                            </ListItemIcon>
                            <ListItemText primary={'Новости'} />
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
                <ListItem key={'Работодателям'} disablePadding>
                    <NavLink to={'/for-employers'} className={setActive}>
                        <ListItemButton>
                            <ListItemIcon>
                                <WorkIcon className={classes.icon} />
                            </ListItemIcon>
                            <ListItemText primary={'Работодателям'} />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem key={'История города'} disablePadding>
                    <NavLink to={'/city-history'} className={setActive}>
                        <ListItemButton>
                            <ListItemIcon>
                                <LocalLibraryIcon className={classes.icon} />
                            </ListItemIcon>
                            <ListItemText primary={'История города'} />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
            </List>
        </Box>
    );

    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

    return (
        <>
            {(['right'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button className={classes.button}
                            onClick={toggleDrawer(anchor, true)}
                    >
                        <MenuIcon fontSize={'medium'} />
                    </Button>
                    <SwipeableDrawer
                        className={classes.wrapper}
                        anchor={anchor}
                        disableBackdropTransition={!iOS}
                        disableDiscovery={iOS}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </>
    );
};
export default SwipeableTemporaryDrawer;