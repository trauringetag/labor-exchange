import { useLocation, Navigate } from 'react-router-dom';
import { FC, ReactNode } from "react";
import { useAppSelector } from "../store/hooks";
import { RootState } from "../store/store";

interface IRequireAuth {
    children: ReactNode;
}

const RequireAuth: FC<IRequireAuth> = (props): JSX.Element => {
    const location = useLocation();
    const available = useAppSelector((state: RootState) => state.checkPassword.available);

    if (!available) {
        return <Navigate to={'/login'} state={{ from: location }} />
    }

    return <div>{ props.children }</div>;
};
export default RequireAuth;