import Services from "../../components/Services/Services";
import Wrapper from "../../components/CommonComponents/Wrapper/Wrapper";
import { FC } from "react";

const Official: FC = (): JSX.Element => (
    <Wrapper title={'Главная страница'}>
        <Services />
    </Wrapper>
);
export default Official;