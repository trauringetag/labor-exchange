import * as React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import { FC } from "react";

interface IProps {
    window?: () => Window;
    children?: React.ReactElement;
}

function ScrollTop(props: IProps) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector('#anchor');
        if (anchor) anchor.scrollIntoView({ block: 'start', behavior: 'smooth' });
    };

    return (
        <Fade in={ trigger }>
            <Box
                onClick={ handleClick }
                role={'presentation'}
                sx={{ position: 'fixed', bottom: 25, right: 25 }}
            >
                { children }
            </Box>
        </Fade>
    );
}

export const HeaderWidget: FC<IProps> = (props): JSX.Element => (
    <ScrollTop {...props}>
        <Fab size={'small'}>
            <KeyboardArrowUpIcon />
        </Fab>
    </ScrollTop>
);