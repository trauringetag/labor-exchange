import * as React from 'react';
import classes from './LinksTabs.module.scss';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import { useState } from "react";

interface ITabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel (props: ITabPanelProps) {
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
                <Box component={'aside'} sx={{ p: 3 }}>
                    <nav className={classes.navigation}>{ children }</nav>
                </Box>
            )}
        </div>
    );
}

function a11yProps (index: number) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`
    };
}

const LinksTabs = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => setValue(newValue);

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
                    <Tab label={'Документы'} {...a11yProps(1)} />
                    <Tab label={'Дополнительные'} {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Link to={'/'}>Главная</Link>
                <Link to={'/about'}>О нас</Link>
                <Link to={'/legislation'}>Законодательство</Link>
                <Link to={'/feed'}>Новости</Link>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Link to={'/questionnaires'}>Опросники</Link>
                <Link to={'/for-employers'}>Работодателям</Link>
                <Link to={'/personal-data-policy'}>Политика обработки персональных данных</Link>
                <Link to={'/legislation/appeal-procedure'}>Порядок обжалования</Link>
                <Link to={'/legislation/legislative-changes'}>Изменение законодательства</Link>
                <Link to={'/temporary-employment'}>Временное трудоустройство</Link>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Link to={'/city-history'}>История города</Link>
            </TabPanel>
        </Box>
    );
};
export default LinksTabs;