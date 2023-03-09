import classes from './PreviewArticle.module.scss';
import { FC } from "react";
import Segue from "../CommonComponents/Segue";

interface INewsArticle {
    id?: number;
    cover: string;
    head: string;
    preview: string;
    updatedAt: string;
}

const PreviewArticle: FC<INewsArticle> = (props): JSX.Element => {
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
                <Segue to={`/feed/id${props.id}`} inscription={'Читать далее...'} />
            </div>
        </article>
    );
};
export default PreviewArticle;