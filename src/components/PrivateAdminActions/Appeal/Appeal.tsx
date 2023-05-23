import classes from './Appeal.module.scss';
import { FC } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { useAppDispatch } from "../../../store/hooks";
import { deleteProcessedRequest } from "../../../store/slices/StatementListSlice";

interface IAppeal {
    id: number,
    full_name: string,
    email: string,
    address: string,
    phone: string,
    category: string,
    social_status: string,
    text_appeal: string,
    createdAt: string
}

const Appeal: FC<IAppeal> = (props): JSX.Element => {
    const dispatch = useAppDispatch();

    const processApplication = async () => {
        await axios.put(`http://localhost:8080/api/reception/${props.id}`, {
            processed: true
        });
        dispatch(deleteProcessedRequest(props.id));
    };

    return (
        <article className={classes.appeal}>
            <div>
                <h3 className={classes.group}>
                    <span className={classes.name}>{ props.full_name }</span>
                    <span className={classes.social__status}>{ props.social_status}</span>
                </h3>
                <p className={classes.address}>{ props.address }</p>
                <p className={classes.group}>
                    <a className={classes.link} href={`tel:${ props.phone }`}>{ props.phone }</a>
                    <span className={classes.stick}>|</span>
                    <a className={classes.link} href={`mailto:${ props.email }`}>{ props.email }</a>
                </p>
            </div>
            <div>
                <p className={classes.category}>Категория: <span>{ props.category }</span></p>
                <p className={classes.text}>{ props.text_appeal}</p>
            </div>
            <div className={classes.control}>
                <Button className={classes.button} variant={'contained'} onClick={ processApplication }>Обработано</Button>
                <time className={classes.time} dateTime={ props.createdAt }>{ props.createdAt }</time>
            </div>
        </article>
    );
};
export default Appeal;