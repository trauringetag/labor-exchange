import classes from './Breadcrumbs.module.scss';
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { NavLink } from "react-router-dom";

const routes = [
    { path: '/', breadcrumb: 'Главная' },
    { path: '/news', breadcrumb: 'Новости' },
    { path: '/about', breadcrumb: 'О нас' },
    { path: '/legislation', breadcrumb: 'Законодательство' },
    { path: '/legislation/appeal-procedure', breadcrumb: 'Порядок обжалования' },
    { path: '/interview', breadcrumb: 'Опрос' },
    { path: '/temporary-employment', breadcrumb: 'Временное трудоустройство' }
];

const MapBreadcrumbs = (props) => {
    const breadcrumbs = useBreadcrumbs(routes);

    return breadcrumbs.map(({ match, breadcrumb }, index) => {
        return index === breadcrumbs.length - 1 ? (
            <span key={match.pathname} className={classes.current}>{breadcrumb}</span>
        ) : (
            <div className={classes.wrapper} key={match.pathname}>
                <NavLink
                    className={classes.past}
                    key={match.pathname}
                    to={match.pathname}
                >
                    {breadcrumb}
                </NavLink>
                {props.separator}
            </div>
        );
    });
};

const Breadcrumbs = props => (
    <section className={classes.breadcrumbs}>
        <MapBreadcrumbs separator={props.separator} />
    </section>
);
export default Breadcrumbs;