import classes from './BasicServices.module.scss';
import Slider from "react-slick";
import Element from "./Element/Element";
import { useSelector } from 'react-redux';
import { RootState } from "../../../store/store";

interface ISettings {
    dots: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    autoplay: boolean;
    autoplaySpeed: number;
    pauseOnHover: boolean;
}

const settings: ISettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
};

const BasicServices = () => {
    const sliderElements = useSelector((state: RootState) => state.slider.sliderElements);

    const displaySliderElements = sliderElements.map(item =>
        <Element key={ item.id }
                 id={ item.id }
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