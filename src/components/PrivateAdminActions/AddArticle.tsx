import classes from './Common.module.scss';
import { ChangeEvent, FC } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import {
    setCover,
    setHead,
    setPreview,
    setBody
} from "../../store/slices/AddArticleSlice";
import axios from "axios";
import {
    handleOpen,
    setNegativeDescription,
    setPositiveDescription,
    setStatus
} from "../../store/slices/ModalSlice";

const AddSituation: FC = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const cover = useAppSelector((state: RootState) => state.addArticle.cover);
    const head = useAppSelector((state: RootState) => state.addArticle.head);
    const preview = useAppSelector((state: RootState) => state.addArticle.preview);
    const body = useAppSelector((state: RootState) => state.addArticle.body);

    const handleChangeCover = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setCover(e.target.value));
    };
    const handleChangeHead = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setHead(e.target.value));
    };
    const handleChangePreview = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setPreview(e.target.value));
    };
    const handleChangeBody = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setBody(e.target.value));
    };

    const submitData = async () => {
        await axios.post('http://localhost:8080/api/articles', {
            cover: cover,
            head: head,
            preview: preview,
            body: body
        }).then(response => {
            dispatch(setStatus(response.status));
            dispatch(setCover(''));
            dispatch(setHead(''));
            dispatch(setPreview(''));
            dispatch(setBody(''));
            dispatch(setPositiveDescription('Данные успешно добавлены!'));
            dispatch(handleOpen(true));
        }).catch(error => {
            dispatch(setStatus(error.response.status));
            dispatch(setNegativeDescription('Возникла ошибка при добавлении данных на сервер! Пожалуйста, перепроверьте все поля!'));
            dispatch(handleOpen(true));
        });
    };

    return (
        <Box
            component={'form'}
            sx={{ '& > :not(style)': { width: '100%' } }}
            noValidate
            autoComplete={'off'}
            className={classes.form}
        >
            <h3>Новая статья в ленту новостей</h3>
            <TextField
                id={'cover'}
                label={'URL-адрес изображения'}
                variant={'outlined'}
                value={cover}
                onChange={handleChangeCover}
            />
            <TextField
                id={'head'}
                label={'Заголовок'}
                variant={'outlined'}
                value={head}
                onChange={handleChangeHead}
            />
            <TextField
                id={'preview'}
                label={'Предварительный просмотр'}
                variant={'outlined'}
                value={preview}
                onChange={handleChangePreview}
                multiline
                minRows={10}
                maxRows={10}
            />
            <TextField
                id={'body'}
                label={'Основная информация статьи'}
                variant={'outlined'}
                value={body}
                onChange={handleChangeBody}
                multiline
                minRows={10}
                maxRows={10}
            />
            <Button variant={'contained'} onClick={submitData}>Добавить</Button>
        </Box>
    );
};
export default AddSituation;