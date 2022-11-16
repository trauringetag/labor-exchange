import classes from './App.module.scss';
import SurfaceBlock from "./components/SurfaceBlock/SurfaceBlock";
import MainBlock from "./components/MainBlock/MainBlock";
import Footer from "./components/Footer/Footer";

const App = () => (
    <div className={classes.wrapper}>
        <SurfaceBlock />
        <MainBlock />
        <Footer />
    </div>
);
export default App;
