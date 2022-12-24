import classes from './BasicServices.module.scss';
import Slider from "react-slick";
import Element from "./Element/Element";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
};

const BasicServices = props => {
    const displaySliderElements = props.sliderElements.map( item =>
        <Element key={ item.id }
                 title={ item.title }
                 text={ item.text }
                 link={ item.link }
                 image={ item.image }
        />
    );
    return (
        <Slider className={classes.slider} {...settings}>{ displaySliderElements }</Slider>
    );
};
export default BasicServices;