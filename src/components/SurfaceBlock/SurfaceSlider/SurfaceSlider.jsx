import classes from './SurfaceSlider.module.scss';
import Slider from "react-slick";
import SliderElement from "./SliderElement/SliderElement";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true
};

const SurfaceSlider = props => {
    const displaySliderElements = props.sliderElements.map( item =>
        <SliderElement key={ item.id }
                       title={ item.title }
                       text={ item.text }
                       link={ item.link }
                       imageUrl={ item.imageUrl }
        />
    );
    return (
        <Slider className={classes.slider} {...settings}>{ displaySliderElements }</Slider>
    );
};
export default SurfaceSlider;