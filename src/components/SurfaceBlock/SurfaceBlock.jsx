import classes from './SurfaceBlock.module.scss';
import Header from "./Header/Header";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import { SurfaceSliderContainer } from "./SurfaceSlider/SurfaceSliderContainer";

const SurfaceBlock = () => (
    <div className={classes.surface}>
        <Header />
        <section className={classes.wrapper}>
            <Breadcrumbs separator={'<'} />
            <SurfaceSliderContainer />
        </section>
    </div>
);
export default SurfaceBlock;