import style from './hero.module.css';
import {Link} from "react-router-dom";


export const Hero = () => {

    return (
        <section className={style.hero}>
            <div className="container">
                <h1 className={style.title}>Кроссовки известных брендов с доставкой по России и СНГ</h1>
                <p className={style.description}>Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и многие другие по низким ценам</p>
                <Link to={'/cart'} className={'hero__btn'}>Перейти к покупкам</Link>
            </div>
        </section>
    );
};