import classes from './NewsArticle.module.scss';
import { FC } from "react";

interface INewsArticle {
    id?: number;
    cover: string;
    head: string;
    body: string;
    date: string;
}

const NewsArticle: FC<INewsArticle> = (props): JSX.Element => (
    <article className={classes.wrapper}>
        <img className={classes.cover}
             src={ props.cover }
             alt={'Обложка'}
        />
        <div className={classes.content}>
            <h3 className={classes.title}>{ props.head }</h3>
            <hr className={classes.underline}/>
            <p className={classes.text}>{ props.body }</p>
            <time className={classes.date} dateTime={ props.date }>{ props.date }</time>
        </div>
    </article>
);
export default NewsArticle;