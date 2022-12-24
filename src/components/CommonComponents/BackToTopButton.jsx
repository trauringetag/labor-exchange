import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';

function ScrollTop(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#anchor');
        if (anchor) anchor.scrollIntoView({block: 'start', behavior: 'smooth'});
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

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func
};

export const BackToTopButton = props => (
    <ScrollTop {...props}>
        <Fab size={'small'}>
            <KeyboardArrowUpIcon />
        </Fab>
    </ScrollTop>
);