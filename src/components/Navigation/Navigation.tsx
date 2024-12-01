import style from './navigation.module.css';
import {Link} from "react-router-dom";


export const Navigation = () => {

    return (
        <>
            <nav className={style.list}>
                <ul className={style.list}>
                    <li>
                        <a href={'#nav'}>Каталог</a>
                    </li>
                    <li>
                        <a href={'#about'}>О нас</a>
                    </li>
                    <li>
                        <a href={'#slide'}>Подбор товара</a>
                    </li>
                    <li>
                        <a href={'#team'}>Наша команда</a>
                    </li>
                    <li>
                        <Link to={'/cart'}>Доставка и оплата</Link>
                    </li>
                    <li>
                        <a href={'#contacts'}>Контакты</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};