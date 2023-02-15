import classes from './Wrapper.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import { useRef, useEffect } from 'react';

const Wrapper = ({ children, title }) => {
    const ref = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    useEffect(() => {
        const position = ref.current.getBoundingClientRect();
        window.scrollBy(0, position.top - 100);
    }, [location]);

    return (
        <section className={classes.container} ref={ref}>
            <div className={classes.header}>
                <h2 className={classes.title}>{ title }</h2>
                {
                    location.pathname !== '/'
                        ? <Button className={classes.button} onClick={ goBack }>
                            <ArrowBackIcon fontSize={'small'}/>
                            <span>Назад</span>
                        </Button> : <></>
                }
                <hr className={classes.underlining} />
            </div>
            { children }
        </section>
    );
};
export default Wrapper;