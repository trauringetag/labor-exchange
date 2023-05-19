import classes from './Breadcrumbs.module.scss';
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { NavLink } from "react-router-dom";
import { FC } from "react";

interface IRoute {
    path: string;
    breadcrumb: string;
}

interface IBreadcrumbs {
    separator: string;
}

const routes: Array<IRoute> = [
    { path: '/', breadcrumb: 'Главная' },
    { path: 'news', breadcrumb: 'Новости' },
    { path: 'about', breadcrumb: 'О нас' },
    { path: 'legislation', breadcrumb: 'Законодательство' },
    { path: 'legislation/appeal-procedure', breadcrumb: 'Порядок обжалования' },
    { path: 'legislation/legislative-changes', breadcrumb: 'Изменение законодательства'},
    { path: 'questionnaires', breadcrumb: 'Анкеты' },
    { path: 'temporary-employment', breadcrumb: 'Временное трудоустройство' },
    { path: 'for-employers', breadcrumb: 'Работодателям' },
    { path: 'feed', breadcrumb: 'Новости' },
    { path: 'feed/*', breadcrumb: 'Статья' },
    { path: 'personal-data-policy', breadcrumb: 'Политика обработки персональных данных' },
    { path: 'city-history', breadcrumb: 'История города' },
    { path: 'public-reception', breadcrumb: 'Общественная приёмная' },
    { path: 'situation-labor-market', breadcrumb: 'Рынок труда' }
];

const MapBreadcrumbs: FC<IBreadcrumbs> = ({ separator }): any => {
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
                { separator }
            </div>
        );
    });
};

const Breadcrumbs: FC<IBreadcrumbs> = (props): JSX.Element => (
    <aside className={classes.breadcrumbs}>
        <MapBreadcrumbs separator={props.separator} />
    </aside>
);
export default Breadcrumbs;