import classes from './Feed.module.scss';
import Wrapper from "../../components/CommonComponents/Wrapper/Wrapper";
import Search from "../../components/Search/Search";
import { FC } from "react";
import NewsArticle from "../../components/NewsArticle/NewsArticle";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Feed: FC = (): JSX.Element => {
    const articles = useSelector((state: RootState) => state.feedPage.articles);

    const displayArticles = articles.map(item => <NewsArticle key={item.id} {...item} />);

    return (
        <Wrapper title={'Лента новостей'}>
            <div className={classes.wrapper}>
                <Search />
                { displayArticles }
            </div>
        </Wrapper>
    );
};
export default Feed;