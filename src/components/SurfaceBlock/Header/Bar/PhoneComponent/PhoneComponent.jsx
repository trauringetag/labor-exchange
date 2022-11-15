import classes from './PhoneComponent.module.scss';
import PhoneIcon from "@mui/icons-material/Phone";

const PhoneComponent = () => (
    <a className={classes.phone} href={'tel:8 (951) 235-85-32'}>
        <PhoneIcon fontSize={'medium'} />
        <span>8 (951) 235-85-32</span>
    </a>
);
export default PhoneComponent;