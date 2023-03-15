import classes from './SearchField.module.scss';
import { ChangeEvent, FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import { updateField } from "../../store/slices/SearchSlice";

const SearchField: FC = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const field = useAppSelector((state: RootState) => state.searchField.field);

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => { dispatch(updateField(e.target.value)); };

    useEffect(() => {
        return () => { dispatch(updateField('')); }
    }, []);

    return (
        <form>
            <input className={classes.search}
                   type={'search'}
                   placeholder={'Поиск...'}
                   onChange={ onChangeInput }
                   value={ field }
            />
        </form>
    );
};
export default SearchField;