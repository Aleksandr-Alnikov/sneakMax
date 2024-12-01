import style from './cards.module.css';
import {Link} from "react-router-dom";
import {FC, useEffect, useState} from "react";
import {useAppDispatch} from "../Hooks/Hooks";
import {addProduct} from "../../redux/cartSlise";
import {Goods} from "../../types";


type Props = {
    item: Goods,
}

export const Cards: FC<Props> = ({item}) => {
    const [isHover, setIsHover] = useState(false);
    const dispatch = useAppDispatch();
    const handleHoverOpen = () => {
        setIsHover(true);
    };

    const handleHoverClose = () => {
        setIsHover(false);
    };

    const handleAddToCart = () => {

        const {title, price, imgUrl} = item;
        dispatch(addProduct({id: Date.now().toString(36) + Math.random().toString(36).substr(2, 9), title, price, imgUrl}));
    };

    useEffect(() => {

    }, [dispatch])
    return (
        <li className={style.item} onMouseEnter={handleHoverOpen} onMouseLeave={handleHoverClose}>
            <article>
                <img className={style.img} src={item.imgUrl} alt={item.title} />
                <div className={style.overlay} />
                <h3 className={style.title}>{item.title}</h3>
                <p className={style.price}>{item.price} p.</p>
                {
                   isHover &&  <Link to={`/goods/${item.id}`}  className={style.btn}>
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="40" cy="40" r="40" fill="#444B58"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M43.9518 40.0664C43.9518 42.2489 42.1818 44.0176 39.9993 44.0176C37.8168 44.0176 36.0481 42.2489 36.0481 40.0664C36.0481 37.8826 37.8168 36.1139 39.9993 36.1139C42.1818 36.1139 43.9518 37.8826 43.9518 40.0664Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M39.9975 49.1936C44.7575 49.1936 49.1113 45.7711 51.5625 40.0661C49.1113 34.3611 44.7575 30.9386 39.9975 30.9386H40.0025C35.2425 30.9386 30.8887 34.3611 28.4375 40.0661C30.8887 45.7711 35.2425 49.1936 40.0025 49.1936H39.9975Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                               </Link>
                }
                {
                    isHover &&  <button className={style.btn_cart} onClick={handleAddToCart}>
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="40" cy="40" r="40" fill="#444B58"/>
                            <path d="M53.9999 36.2857H49.2454L44.2502 27.4507C44.0025 27.0118 43.465 26.8685 43.0497 27.1324C42.6353 27.3963 42.5011 27.9666 42.7498 28.4065L47.2046 36.2857H32.7954L37.2502 28.4064C37.4989 27.9666 37.3647 27.3962 36.9503 27.1323C36.5342 26.8685 35.9984 27.0117 35.7498 27.4506L30.7546 36.2857H26V38.1428H27.8991L30.1221 50.7266C30.3545 52.0442 31.4397 53 32.7026 53H47.2974C48.5603 53 49.6455 52.0442 49.8771 50.7275L52.1008 38.1428H54L53.9999 36.2857ZM48.1569 50.3857C48.08 50.8246 47.7186 51.1429 47.2973 51.1429H32.7026C32.2814 51.1429 31.92 50.8246 31.8422 50.3848L29.679 38.1428H50.321L48.1569 50.3857Z" fill="white"/>
                        </svg>
                    </button>
                }
            </article>
        </li>
    );
};