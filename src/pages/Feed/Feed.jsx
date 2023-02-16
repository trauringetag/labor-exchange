import classes from './Feed.module.scss';
import Wrapper from "../../components/CommonComponents/Wrapper/Wrapper";
import Search from "../../components/Search/Search";

const Feed = () => (
    <Wrapper title={'Лента новостей'}>
        <section className={classes.container}>
            <Search />
        </section>
    </Wrapper>
);
export default Feed;