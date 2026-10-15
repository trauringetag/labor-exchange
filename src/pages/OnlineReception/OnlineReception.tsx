import classes from './OnlineReception.module.scss';
import { FC, forwardRef, ChangeEvent, useState, useEffect } from "react";
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
	setCategoryId,
	setSocialStatusId
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

interface DictionaryItem {
    id: number;
    name: string;
}

const TextMaskCustom = forwardRef<HTMLElement, CustomProps>(
	function TextMaskCustom(props, ref) {
		const { onChange, ...other } = props;
		return (
			<IMaskInput
				{...other}
				mask="+7 (#00) 000-00-00"
				definitions={{ '#': /[1-9]/ }}
				inputRef={ref}
				onChange={() => { }}
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
	const categoryId = useAppSelector((state: RootState) => state.onlineReception.categoryId);
	const socialStatusId = useAppSelector((state: RootState) => state.onlineReception.socialStatusId);
	const textAppeal = useAppSelector((state: RootState) => state.onlineReception.textAppeal);
	const isAgree = useAppSelector((state: RootState) => state.onlineReception.isAgree);

    const [categories, setCategories] = useState<DictionaryItem[]>([]);
    const [socialStatuses, setSocialStatuses] = useState<DictionaryItem[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/categories').then(res => setCategories(res.data));
        axios.get('http://localhost:8080/api/social_statuses').then(res => setSocialStatuses(res.data));
    }, []);

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
		dispatch(setCategoryId(Number(e.target.value)));
	};
	const handleChangeSocialStatus = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(setSocialStatusId(Number(e.target.value)));
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
			category_id: categoryId,
			social_status_id: socialStatusId,
			text_appeal: textAppeal,
			processed: false
		}).then(response => {
			dispatch(setStatus(response.status));
			dispatch(setFullName(''));
			dispatch(setEmail(''));
			dispatch(setAddress(''));
			dispatch(setPhone(''));
			dispatch(setCategoryId(null));
			dispatch(setSocialStatusId(null));
			dispatch(setTextAppeal(''));
			dispatch(setPositiveDescription('Ваше заявление успешно отправлено на рассмотрение сотрудникам ОКУ ЦЗН г. Карталы! В ближайшее время с вами свяжутся!'));
			dispatch(handleOpen(true));
		}).catch(error => {
			dispatch(setStatus(error.response?.status || 500));
			dispatch(setNegativeDescription('Произошла ошибка при отправке заявления! Пожалуйста, проверьте корректность составления, и повторите попытку!'));
			dispatch(handleOpen(true));
		});
	};

	return (
		<Wrapper title={'Онлайн-приёмная'}>
			<Box
				component={'form'}
				sx={{ '& > :not(style)': { width: '100%' } }}
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
					value={categoryId ?? ''}
					onChange={handleChangeCategory}
				>
                    <MenuItem value=""><em>Выберите категорию</em></MenuItem>
					{categories.map((option) => (
						<MenuItem key={option.id} value={option.id}>
							{option.name}
						</MenuItem>
					))}
				</TextField>
				<TextField
					id={'social-status'}
					select
					label={'Социальный статус'}
					value={socialStatusId ?? ''}
					onChange={handleChangeSocialStatus}
				>
                    <MenuItem value=""><em>Выберите социальный статус</em></MenuItem>
					{socialStatuses.map((option) => (
						<MenuItem key={option.id} value={option.id}>
							{option.name}
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
					<Checkbox onClick={() => dispatch(setIsAgree(!isAgree))} />
					<label>Я ознакомлен с <Link className={classes.link} to={'/personal-data-policy'}>Политикой обработки персональных данных</Link>!</label>
				</div>
				<Button className={classes.button} variant={'contained'} disabled={!isAgree} onClick={submitData}>Отправить</Button>
			</Box>
		</Wrapper>
	);
};
export default OnlineReception;