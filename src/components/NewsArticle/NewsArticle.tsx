import classes from './NewsArticle.module.scss';
import { FC } from "react";

interface INewsArticle {
    id?: number;
    cover: string;
    head: string;
    preview: string;
    updatedAt: string;
}

const NewsArticle: FC<INewsArticle> = (props): JSX.Element => {
    const parseDate = props.updatedAt
        .replace('T', ' ')
        .replace('.000Z', '');

    return (
        <article className={classes.wrapper}>
            <img className={classes.cover}
                 src={ props.cover }
                 alt={'Обложка'}
            />
            <div className={classes.content}>
                <h3 className={classes.title}>{ props.head }</h3>
                <hr className={classes.underline}/>
                <p className={classes.text}>{ props.preview }</p>
                <time className={classes.date} dateTime={ props.updatedAt }>{ parseDate }</time>
            </div>
        </article>
    );
};
export default NewsArticle;