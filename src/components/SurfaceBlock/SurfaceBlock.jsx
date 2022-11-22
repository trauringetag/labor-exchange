import classes from './SurfaceBlock.module.scss';
import Header from "./Header/Header";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import { SurfaceSliderContainer } from "./SurfaceSlider/SurfaceSliderContainer";
import { Fade } from "react-awesome-reveal";

const SurfaceBlock = () => (
    <div className={classes.surface}>
        <Header />
        <Fade triggerOnce>
            <section className={classes.wrapper}>
                <Breadcrumbs separator={'<'} />
                <SurfaceSliderContainer />
            </section>
        </Fade>
    </div>
);
export default SurfaceBlock;