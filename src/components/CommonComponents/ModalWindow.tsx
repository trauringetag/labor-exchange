import { FC } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import { handleClose } from "../../store/slices/ModalSlice";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface IModalWindow {
    title: string;
    description: string;
}

const ModalWindow: FC<IModalWindow> = (props): JSX.Element => {
    const dispatch = useAppDispatch();
    const open = useAppSelector((state: RootState) => state.modal.open);

    return (
        <Modal
            open={ open }
            onClose={ () => dispatch(handleClose(false)) }
            aria-labelledby={'title'}
            aria-describedby={'description'}
        >
            <Box sx={style}>
                <Typography id={'title'} variant={'h6'} component={'h2'}>
                    { props.title }
                </Typography>
                <Typography id={'description'} sx={{ mt: 2 }}>
                    { props.description }
                </Typography>
            </Box>
        </Modal>
    );
};
export default ModalWindow;