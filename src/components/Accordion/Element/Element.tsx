import classes from './Element.module.scss';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import { FC } from "react";

interface IElement {
    preview: string;
    cabinet: number;
    phone: string;
}

const Element: FC<IElement> = ({ ...props }): JSX.Element => (
    <Accordion className={classes.item}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.preview} component={'h3'}>{ props.preview }</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography className={classes.description} component={'p'}>
                Кабинет: <span>№{ props.cabinet }</span>
                <br/>
                Телефон: <a href={'tel:2-24-95'}>{ props.phone }</a>
            </Typography>
        </AccordionDetails>
    </Accordion>
);
export default Element;