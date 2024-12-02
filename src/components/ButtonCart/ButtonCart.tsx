import style from './buttonCart.module.css';
import {useAppSelector} from "../Hooks/Hooks";
import {useState} from "react";
import {ModalCart} from "../ModalCart/ModalCart";
import {Link, useNavigate} from "react-router-dom";


export const ButtonCart = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isBurger, setIsBurger] = useState<boolean>(false);
    const {cart} =useAppSelector(state => state.cart);
    const navigate = useNavigate();

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const openBurger = () => {
        setIsBurger(!isBurger);
    };

    const handleNav = (path:string, id:string) => {
        openBurger();
        navigate(path);
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 0);
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
                            <Link onClick={openBurger} to={'/'}>Каталог</Link>
                        </li>
                        <li>
                            <a onClick={() => handleNav('/', 'about')}>О нас</a>
                        </li>
                        <li>
                            <a onClick={() => handleNav('/', 'slide')}>Подбор товара</a>
                        </li>
                        <li>
                            <a onClick={() => handleNav('/', 'team')}>Наша команда</a>
                        </li>
                        <li>
                            <Link to={'/cart'}>Доставка и оплата</Link>
                        </li>
                        <li>
                            <a onClick={() => handleNav('/', 'contacts')}>Контакты</a>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
};