import classes from './Footer.module.scss';
import { Fade } from "react-awesome-reveal";
import Grid from "./Grid/Grid";

const Footer = () => (
    <Fade className={classes.wrapper}>
        <footer className={classes.footer}>
            <Grid />
            <section className={classes.information}>
                <h3 className={classes.title}>Lorem ipsum dolor.</h3>
                <p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores laborum quam repudiandae voluptatibus? Aperiam blanditiis ducimus enim fugit modi ratione, soluta unde velit. Ab animi beatae deleniti eaque est eveniet facilis id, iure libero maxime nam nisi quaerat suscipit! Beatae cupiditate dolores molestias, praesentium provident quam reprehenderit unde voluptate?</p>
            </section>
            <p className={classes.copyright}>2014 &copy; Официальный сайт Центра занятости населения</p>
        </footer>
    </Fade>
);
export default Footer;