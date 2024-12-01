import style from './buttonCart.module.css';
import {useAppSelector} from "../Hooks/Hooks";
import {useState} from "react";
import {ModalCart} from "../ModalCart/ModalCart";
import {Link} from "react-router-dom";


export const ButtonCart = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isBurger, setIsBurger] = useState<boolean>(false);
    const {cart} =useAppSelector(state => state.cart);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const openBurger = () => {
        setIsBurger(!isBurger);
    };

    return (
        <div className={style.wrapper}>
            <div className={style.btn_cart}>
                <button className={style.btn} onClick={openModal}>Корзина</button>
                <span className={style.counter}>{cart.length}</span>
                {isOpen && <ModalCart modal={isOpen} closeModal={closeModal}/>}
            </div>
            <div onClick={openBurger} className={style.burger}>
                <span className={style.span}></span>
                <span className={style.span}></span>
                <span className={style.span}></span>
            </div>
            {isBurger && (
                <nav className={style.nav}>
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
            )}
        </div>
    );
};