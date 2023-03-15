import classes from './Feed.module.scss';
import Wrapper from "../../components/CommonComponents/Wrapper/Wrapper";
import SearchField from "../../components/SearchField/SearchField";
import { FC, useEffect } from "react";
import PreviewArticle from "../../components/PreviewArticle/PreviewArticle";
import { RootState } from "../../store/store";
import axios from 'axios';
import { getAllArticles, changeIsLoaded } from "../../store/slices/FeedSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { HandySvg } from "handy-svg";
import LoaderIcon from '../../assets/loader.svg';

interface IArticles {
    id?: number;
    cover: string;
    head: string;
    preview: string;
    updatedAt: string;
}

const Feed: FC = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const articles = useAppSelector((state: RootState) => state.feedPage.articles);
    const field = useAppSelector((state: RootState) => state.searchField.field);
    const isLoaded = useAppSelector((state: RootState) => state.feedPage.isLoaded);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/articles?head=${field}`).then(response => {
            dispatch(getAllArticles(response.data));
            dispatch(changeIsLoaded(true));
        });

        return () => { dispatch(changeIsLoaded(false)); }
    }, [dispatch, field]);

    const displayArticles = articles.map((item: IArticles) =>
        <PreviewArticle key={item.id} { ...item } />
    );

    return (
        <Wrapper title={'Лента новостей'}>
            <div className={classes.wrapper}>
                <SearchField />
                {
                    isLoaded
                        ? displayArticles.length !== 0 ? displayArticles : <h3 className={classes.empty}>По запросу <span>{ field }</span> ничего не найдено!</h3>
                        : <HandySvg src={ LoaderIcon} />
                }
            </div>
        </Wrapper>
    );
};
export default Feed;