import classes from './SingleArticle.module.scss';
import { FC, useEffect } from "react";
import Wrapper from "../../components/CommonComponents/Wrapper/Wrapper";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getSingleArticle } from "../../store/slices/FeedSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";

interface IArticle {
    id?: number;
    cover?: string;
    head?: string;
    preview?: string;
    body?: string;
    createdAt?: string;
    updatedAt?: string;
}

const SingleArticle: FC = (): JSX.Element => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const article: IArticle = useAppSelector((state: RootState) => state.feedPage.singleArticle);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/articles/${id}`).then(response => {
            dispatch(getSingleArticle(response.data));
        });
    }, [dispatch, id]);

    const parseDate = article.updatedAt?.replace('T', ' ').replace('.000Z', '');

    return (
        <Wrapper title={article.head}>
            <div className={classes.container}>
                <time className={classes.date} dateTime={article.updatedAt}>{ parseDate }</time>
                <p className={classes.body}>{ article.body }</p>
                <img className={classes.cover} src={article.cover} alt={'Обложка'} />
            </div>
        </Wrapper>
    );
};
export default SingleArticle;