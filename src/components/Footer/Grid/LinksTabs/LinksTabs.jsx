import classes from './LinksTabs.module.scss';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { NavLink } from "react-router-dom";

function TabPanel (props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role={'tabpanel'}
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box component={'section'} sx={{ p: 3 }}>
                    <nav className={classes.navigation}>{ children }</nav>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps (index) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`
    };
}

const LinksTabs = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => setValue(newValue);

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    className={classes.tabs}
                    value={value}
                    onChange={handleChange}
                    variant={'scrollable'}
                    textColor={'inherit'}
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label={'Tabs'}
                >
                    <Tab label={'Основные'} {...a11yProps(0)} />
                    <Tab label={'Дополнительные'} {...a11yProps(1)} />
                    <Tab label={'Вкладка №3'} {...a11yProps(2)} />
                    <Tab label={'Вкладка №4'} {...a11yProps(3)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <NavLink to={'/'}>Главная</NavLink>
                <NavLink to={'/about'}>О нас</NavLink>
                <NavLink to={'/'}>Заглушка</NavLink>
                <NavLink to={'/'}>Заглушка</NavLink>
                <NavLink to={'/'}>Заглушка</NavLink>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <NavLink to={'/interview'}>Опросники</NavLink>
                <NavLink to={'/'}>Заглушка</NavLink>
                <NavLink to={'/'}>Заглушка</NavLink>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <NavLink to={'/'}>Заглушка</NavLink>
                <NavLink to={'/'}>Заглушка</NavLink>
                <NavLink to={'/'}>Заглушка</NavLink>
                <NavLink to={'/'}>Заглушка</NavLink>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <NavLink to={'/'}>Заглушка</NavLink>
                <NavLink to={'/'}>Заглушка</NavLink>
            </TabPanel>
        </Box>
    );
};
export default LinksTabs;