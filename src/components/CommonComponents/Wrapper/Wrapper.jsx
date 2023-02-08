import classes from './Wrapper.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";

const Wrapper = ({ children, title }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <section className={classes.container}>
            <div className={classes.header}>
                <h2 className={classes.title}>{ title }</h2>
                {
                    location.pathname !== '/'
                        ? <Button className={classes.button} onClick={ goBack }>
                            <ArrowBackIcon fontSize={'small'}/>
                            <span>Назад</span>
                        </Button> : <></>
                }
            </div>
            <hr className={classes.underlining} />
            { children }
        </section>
    );
};
export default Wrapper;