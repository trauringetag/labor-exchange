import Wrapper from "../../components/CommonComponents/Wrapper/Wrapper";
import { FC, useEffect } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getMonthlyData } from "../../store/slices/LaborMarketSlice";
import { RootState } from "../../store/store";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface IMonthlyData {
    period?: string,
    unemployed?: number,
    are_registered?: number,
    number_of_vacancies?: number
}

const SituationLaborMarket: FC = (): JSX.Element => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        axios.get('http://localhost:8080/api/situation_labor_market').then(response => {
            dispatch(getMonthlyData(response.data));
        });
    }, [dispatch]);

    const monthlyData = useAppSelector((state: RootState) => state.laborMarket.monthlyData);

    const labels = monthlyData.map((item: IMonthlyData) => item.period);
    const unemployed = monthlyData.map((item: IMonthlyData) => item.unemployed);
    const areRegistered = monthlyData.map((item: IMonthlyData) => item.are_registered);
    const numberOfVacancies = monthlyData.map((item: IMonthlyData) => item.number_of_vacancies);

    const options = {
        responsive: true,
        plugins: {
            legend: { position: 'top' as const },
            title: { display: true }
        }
    };

    const data = {
        labels,
        datasets: [
            {
                label: 'Безработные (чел.)',
                data: unemployed,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Состоят на учёте (чел.)',
                data: areRegistered,
                borderColor: 'rgb(80, 235, 53)',
                backgroundColor: 'rgba(80, 235, 53, 0.5)',
            },
            {
                label: 'Количество вакансий',
                data: numberOfVacancies,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ]
    };

    return (
        <Wrapper title={'Ситуация на рынке труда'}>
            <Line options={ options } data={ data } />
        </Wrapper>
    );
};
export default SituationLaborMarket;