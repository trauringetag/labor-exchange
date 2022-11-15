import classes from './SurfaceBlock.module.scss';
import Header from "./Header/Header";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import SurfaceSlider from "./SurfaceSlider/SurfaceSlider";

const SurfaceBlock = () => (
    <div className={classes.surface}>
        <Header />
        <section className={classes.wrapper}>
            <Breadcrumbs separator={'<'} />
            <SurfaceSlider />
        </section>
    </div>
);
export default SurfaceBlock;