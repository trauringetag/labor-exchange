import classes from './PublicReception.module.scss';
import { FC } from "react";
import Wrapper from "../../components/CommonComponents/Wrapper/Wrapper";
import { Link } from "react-router-dom";
import StatementFile from "../../assets/documents/statement.doc";

const PublicReception: FC = (): JSX.Element => (
    <Wrapper title={'Общественная приёмная Губернатора Челябинской области в Карталинском районе'}>
        <section className={classes.wrapper}>
            <h3 className={`${classes.title} ${classes.italic}`}>Руководитель общественной приёмной - Павлова Лилия Григорьевна. Телефон: <a className={classes.link} href="tel:2-22-16">2-22-16</a>.</h3>
            <h3 className={classes.title}>Формы обращения в общественную приёмную:</h3>
            <ol className={classes.list}>
                <li>Прийти на личный прием: Первый и третий вторник месяца с 10 до 12 ч. г.Карталы, ул.Славы, 4, первый этаж (административное здание МУЗ "Карталинская городская больница").</li>
                <li>Направить обращение по почте по адресу: 457351, Челябинская область, Карталинский район, г.Карталы, ул.Славы, 4 в Общественную приемную Губернатора Челябинской области в Карталинском районе. Эл.почта: <a className={classes.link} href="mailto:gubernator.kartal.@yandex.ru">gubernator.kartal.@yandex.ru</a>.</li>
            </ol>
            <h3 className={classes.title}>В обращении в обязательном порядке необходимо:</h3>
            <ol className={classes.list}>
                <li>Указать кому направлено обращение - Общественная приемная Губернатора Челябинской области в Карталинском районе.</li>
                <li>Указать свою фамилию, имя, отчество (полностью).</li>
                <li>Указать почтовый адрес, по которому должен быть направлен ответ.</li>
                <li>Указать контактный телефон.</li>
                <li>Изложить суть обращения.</li>
                <li>Приложить копии документов и материалов по сути обращения.</li>
                <li>Поставить личную подпись и дату.</li>
            </ol>
            <p className={classes.italic}>Ответ на ваше обращение будет направлен в течение 1 месяца по почтовому адресу, указанному в вашем обращении.</p>
            <Link className={classes.link}
                  to={ StatementFile }
                  target={'_blank'}
                  download={'Бланк заявления'}
            >
                Скачать бланк заявления
            </Link>
        </section>
    </Wrapper>
);
export default PublicReception;