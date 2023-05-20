import classes from './OnlineReception.module.scss';
import { FC, forwardRef, ChangeEvent } from "react";
import Wrapper from "../../components/CommonComponents/Wrapper/Wrapper";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { IMaskInput } from 'react-imask';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
    setAddress,
    setEmail,
    setFullName,
    setPhone,
    setTextAppeal,
    setIsAgree,
    setCategory,
    setSocialStatus
} from "../../store/slices/OnlineReceptionSlice";
import { RootState } from "../../store/store";
import Button from "@mui/material/Button";
import { Checkbox, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { handleOpen, setPositiveDescription, setNegativeDescription, setStatus } from "../../store/slices/ModalSlice";

interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

const categoryList = [
    { value: 'Предложение', label: 'Предложение' },
    { value: 'Заявление', label: 'Заявление' },
    { value: 'Жалоба', label: 'Жалоба' }
];

const socialStatusList = [
    { value: 'Не указан', label: 'Не указан' },
    { value: 'Беженец', label: 'Беженец' },
    { value: 'Безработный', label: 'Безработный' },
    { value: 'БОМЖ', label: 'БОМЖ' },
    { value: 'Ветеран боевых действий', label: 'Ветеран боевых действий' },
    { value: 'Ветеран труда', label: 'Ветеран труда' },
    { value: 'Военнослужащий', label: 'Военнослужащий' },
    { value: 'Госслужащий', label: 'Госслужащий' },
    { value: 'Дети-сироты', label: 'Дети-сироты' },
    { value: 'Домохозяйка', label: 'Домохозяйка' },
    { value: 'Инвалид ВОВ', label: 'Инвалид ВОВ' },
    { value: 'Инвалид ВС', label: 'Инвалид ВС' },
    { value: 'Инвалид по общему заболеванию', label: 'Инвалид по общему заболеванию' },
    { value: 'Инвалид с детства', label: 'Инвалид с детства' },
    { value: 'Инвалид труда', label: 'Инвалид труда' },
    { value: 'Коллектив', label: 'Коллектив' },
    { value: 'Мать-одиночка', label: 'Мать-одиночка' },
    { value: 'Многодетная семья', label: 'Многодетная семья' },
    { value: 'Организация', label: 'Организация' },
    { value: 'Осуждённый', label: 'Осуждённый' },
    { value: 'Пенсионер', label: 'Пенсионер' },
    { value: 'Пострадавший от радиации', label: 'Пострадавший от радиации' },
    { value: 'Пострадавший от репрессий', label: 'Пострадавший от репрессий' },
    { value: 'Предприниматель', label: 'Предприниматель' },
    { value: 'Работник здравоохранения', label: 'Работник здравоохранения' },
    { value: 'Работник культуры, спорта', label: 'Работник культуры, спорта' },
    { value: 'Работник образования', label: 'Работник образования' },
    { value: 'Рабочий', label: 'Рабочий' },
    { value: 'Руководитель', label: 'Руководитель' },
    { value: 'Семьи погибших', label: 'Семьи погибших' },
    { value: 'Труженик тыла', label: 'Труженик тыла' },
    { value: 'Участник ВОВ', label: 'Участник ВОВ' },
    { value: 'Учащийся, студент', label: 'Учащийся, студент' }
];

const TextMaskCustom = forwardRef<HTMLElement, CustomProps> (
    function TextMaskCustom(props, ref) {
        const { onChange, ...other } = props;
        return (
            <IMaskInput
                {...other}
                mask="+7 (#00) 000-00-00"
                definitions={{ '#': /[1-9]/ }}
                inputRef={ref}
                onChange={() => {}}
                onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
                overwrite
            />
        );
    }
);

const OnlineReception: FC = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const fullName = useAppSelector((state: RootState) => state.onlineReception.fullName);
    const email = useAppSelector((state: RootState) => state.onlineReception.email);
    const address = useAppSelector((state: RootState) => state.onlineReception.address);
    const phone = useAppSelector((state: RootState) => state.onlineReception.phone);
    const category = useAppSelector((state: RootState) => state.onlineReception.category);
    const socialStatus = useAppSelector((state: RootState) => state.onlineReception.socialStatus);
    const textAppeal = useAppSelector((state: RootState) => state.onlineReception.textAppeal);
    const isAgree = useAppSelector((state: RootState) => state.onlineReception.isAgree);

    const handleChangeFullName = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setFullName(e.target.value));
    };
    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setEmail(e.target.value));
    };
    const handleChangeAddress = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setAddress(e.target.value));
    };
    const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setPhone(e.target.value));
    };
    const handleChangeCategory = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setCategory(e.target.value));
    };
    const handleChangeSocialStatus = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSocialStatus(e.target.value));
    };
    const handleChangeTextAppeal = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setTextAppeal(e.target.value));
    };

    const submitData = async () => {
        await axios.post('http://localhost:8080/api/reception', {
            full_name: fullName,
            email: email,
            address: address,
            phone: phone,
            category: category,
            social_status: socialStatus,
            text_appeal: textAppeal
        }).then(response => {
            dispatch(setStatus(response.status));
            dispatch(setFullName(''));
            dispatch(setEmail(''));
            dispatch(setAddress(''));
            dispatch(setPhone(''));
            dispatch(setCategory('Предложение'));
            dispatch(setSocialStatus('Не указан'));
            dispatch(setTextAppeal(''));
            dispatch(setPositiveDescription('Ваше заявление успешно отправлено на рассмотрение сотрудникам ОКУ ЦЗН г. Карталы! В ближайшее время с вами свяжутся!'));
            dispatch(handleOpen(true));
        }).catch(error => {
            dispatch(setStatus(error.response.status));
            dispatch(setNegativeDescription('Произошла ошибка при отправке заявления! Пожалуйста, проверьте корректность составления, и повторите попытку!'));
            dispatch(handleOpen(true));
        });
    };

    return (
        <Wrapper title={'Онлайн-приёмная'}>
            <Box
                component={'form'}
                sx={{'& > :not(style)': { m: 1, width: '100%' }}}
                noValidate
                autoComplete={'off'}
                className={classes.form}
            >
                <TextField
                    id={'full-name'}
                    label={'ФИО (Полностью)'}
                    variant={'outlined'}
                    value={fullName}
                    onChange={handleChangeFullName}
                />
                <TextField
                    id={'email'}
                    label={'Email'}
                    variant={'outlined'}
                    value={email}
                    onChange={handleChangeEmail}
                />
                <TextField
                    id={'address'}
                    label={'Почтовый адрес'}
                    variant={'outlined'}
                    value={address}
                    onChange={handleChangeAddress}
                />
                <TextField
                    id={'phone'}
                    label={'Номер телефона'}
                    variant={'outlined'}
                    name={'phone'}
                    value={phone}
                    onChange={handleChangePhone}
                    InputProps={{ inputComponent: TextMaskCustom as any }}
                />
                <TextField
                    id={'category'}
                    select
                    label={'Категория'}
                    value={category}
                    onChange={handleChangeCategory}
                >
                    {categoryList.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id={'social-status'}
                    select
                    label={'Социальный статус'}
                    value={socialStatus}
                    onChange={handleChangeSocialStatus}
                >
                    {socialStatusList.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id={'text-appeal'}
                    label={'Текст обращения'}
                    variant={'outlined'}
                    value={textAppeal}
                    onChange={handleChangeTextAppeal}
                    multiline
                    minRows={10}
                    maxRows={10}
                />
                <div className={classes.agreement}>
                    <Checkbox onClick={ () => dispatch(setIsAgree(!isAgree)) }/>
                    <label>Я ознакомлен с <Link className={classes.link} to={'/personal-data-policy'}>Политикой обработки персональных данных</Link>!</label>
                </div>
                <Button className={classes.button} variant={'contained'} disabled={!isAgree} onClick={ submitData }>Отправить</Button>
            </Box>
        </Wrapper>
    );
};
export default OnlineReception;