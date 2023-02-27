import classes from './Feed.module.scss';
import Wrapper from "../../components/CommonComponents/Wrapper/Wrapper";
import Search from "../../components/Search/Search";
import { FC } from "react";

const Feed: FC = (): JSX.Element => (
    <Wrapper title={'Лента новостей'}>
        <div className={classes.wrapper}>
            <Search />
        </div>
    </Wrapper>
);
export default Feed;