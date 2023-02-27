import classes from './GoogleMaps.module.scss';
import { FC } from "react";

const GoogleMaps: FC = (): JSX.Element => (
    <>
        <h3 className={classes.title}>Как нас найти?</h3>
        <iframe
            title={'Google Maps'}
            className={classes.maps}
            src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1198.8402984299748!2d60.6506965480718!3d53.062046259841786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43d22e72b5480da5%3A0x7c73f551984d4cd0!2z0KbQtdC90YLRgCDQl9Cw0L3Rj9GC0L7RgdGC0Lgg0J3QsNGB0LXQu9C10L3QuNGPINCTLtC60LDRgNGC0LDQu9GL!5e0!3m2!1sru!2sru!4v1669025710688!5m2!1sru!2sru'}
            allowFullScreen={true}
            height={500}
            loading={'lazy'}
            referrerPolicy={'no-referrer-when-downgrade'}
        />
    </>
);
export default GoogleMaps;