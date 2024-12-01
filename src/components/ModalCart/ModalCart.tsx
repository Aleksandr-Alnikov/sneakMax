import style from './modalCart.module.css';
import {createPortal} from "react-dom";
import {useAppSelector} from "../Hooks/Hooks";
import {ModalProductsCart} from "../ModalProductsCart/ModalProductsCart";
import {Link} from "react-router-dom";
import {FC} from "react";


type Props = {
    modal: boolean;
    closeModal: () => void;
};

export const ModalCart: FC<Props> = ({closeModal, modal}) => {
    const portal = document.getElementById('root-portal');
    const {cart} = useAppSelector(state => state.cart);

    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    if (!portal) {
        return null;
    }

    if (!modal) {
        return null;
    }

    return createPortal(
        <div className={style.overlay}>
            <div className={style.modal}>
                <button className={style.btn} onClick={closeModal}>&times;</button>
                <ul className={style.list}>
                    {cart && cart.map(item => {
                        return <ModalProductsCart item={item} key={item.id} />
                    })}
                </ul>
                <div className={style.control}>
                    <div>
                        <p className={style.text}>Итого:</p>
                        <p className={style.price}>{totalPrice} ₽</p>
                    </div>
                    <Link className={style.btn_cart} to={`/cart`} onClick={closeModal}>Перейти в корзину</Link>
                </div>

            </div>
        </div>,
        portal
    );
};