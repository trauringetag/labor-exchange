import classes from './Element.module.scss';
import Steps from '../../../../assets/slider/steps.svg';
import Judge from '../../../../assets/slider/judge.svg';
import Office from '../../../../assets/slider/office.svg';
import Interview from '../../../../assets/slider/interview.svg';
import Segue from "../../../CommonComponents/Segue";
import { FC } from "react";

const IconSelection = (icon: string): string => {
    switch (icon) {
        case 'steps':
            return Steps;
        case 'questionnaires':
            return Interview;
        case 'judge':
            return Judge;
        case 'office':
            return Office;
        default:
            return 'https://placehold.co/400';
    }
};

interface IElement {
    id: number;
    title: string;
    text: string;
    link: string;
    image: string;
}

const Element: FC<IElement> = ({ ...props }): JSX.Element => (
    <article className={classes.item} key={ props.id }>
        <div className={classes.content}>
            <h2 className={classes.title}>{ props.title }</h2>
            <p className={classes.text}>{ props.text }</p>
            <nav>
                <Segue to={ props.link } inscription={'Перейти'} />
            </nav>
        </div>
        <img className={classes.image} src={ IconSelection(props.image) } alt={'Фотография'} />
    </article>
);
export default Element;