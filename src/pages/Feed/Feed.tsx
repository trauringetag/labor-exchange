import classes from './Feed.module.scss';
import Wrapper from "../../components/CommonComponents/Wrapper/Wrapper";
import SearchField from "../../components/SearchField/SearchField";
import { FC, useEffect } from "react";
import PreviewArticle from "../../components/PreviewArticle/PreviewArticle";
import { RootState } from "../../store/store";
import axios from 'axios';
import { getAllArticles } from "../../store/slices/FeedSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { HandySvg } from "handy-svg";
import LoaderIcon from '../../assets/loader.svg';

interface IDisplayArticles {
    id?: number;
    cover: string;
    head: string;
    preview: string;
    updatedAt: string;
}

const Feed: FC = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const articles = useAppSelector((state: RootState) => state.feedPage.articles);

    useEffect(() => {
        axios.get('http://localhost:8080/api/articles').then(response => {
            dispatch(getAllArticles(response.data));
        });
    }, [dispatch]);

    const displayArticles = articles.map((item: IDisplayArticles) =>
        <PreviewArticle key={item.id} { ...item } />
    );

    return (
        <Wrapper title={'Лента новостей'}>
            <div className={classes.wrapper}>
                <SearchField />
                {
                    displayArticles.length !== 0
                        ? displayArticles
                        : <HandySvg src={ LoaderIcon } />
                }
            </div>
        </Wrapper>
    );
};
export default Feed;