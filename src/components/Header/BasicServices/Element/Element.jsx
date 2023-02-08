import classes from './Element.module.scss';
import Steps from '../../../../assets/slider/steps.svg';
import Judge from '../../../../assets/slider/judge.svg';
import Office from '../../../../assets/slider/office.svg';
import Interview from '../../../../assets/slider/interview.svg';
import LinkButton from "../../../CommonComponents/LinkButton";

const IconSelection = icon => {
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

const Element = props => (
    <article className={classes.item} key={ props.id }>
        <div className={classes.content}>
            <h2 className={classes.title}>{ props.title }</h2>
            <p className={classes.text}>{ props.text }</p>
            <nav>
                <LinkButton to={ props.link } inscription={'Перейти'} />
            </nav>
        </div>
        <img className={classes.image} src={ IconSelection(props.image) } alt={'Фотография'} />
    </article>
);
export default Element;