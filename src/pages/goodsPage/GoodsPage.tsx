import {useAppDispatch, useAppSelector} from "../../components/Hooks/Hooks";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {fetchGoodsId} from "../../redux/goodsSlice";
import {Button} from "../../components/Button/Button";
import style from './goodsPage.module.css';

export const GoodsPage = () => {
    const params = useParams();
    const dispatch = useAppDispatch();
    const {goodsId, isLoading, isError} = useAppSelector(state => state.goods);

    useEffect(() => {
        if(params.id) {
            dispatch(fetchGoodsId(parseInt(params.id)));
        }
    }, [dispatch, params.id]);


    if (isLoading) {
        return <p>Загрузка...</p>;
    }
    if (isError) {
        return <p>Произошла ошибка при загрузке товара</p>;
    }
    if (!goodsId) {
        return <p>Товар не найден</p>;
    }


    return (
        <section>
            <div className="container">
                <div className={style.wrapper}>
                    <div className={style.title_box}>
                        <img className={style.img} src={goodsId.imgUrl} alt={goodsId.title}/>
                        <p className={style.title}>Описание</p>
                        <p className={style.description}>{goodsId.description}</p>
                    </div>
                    <div>
                        <div className={style.art}>
                            <span className={style.availability}>Артикул: {goodsId.vendorСode}</span>
                            <span className={style.availability}>В наличии: {goodsId.inStock} шт.</span>
                        </div>
                        <h3 className={style.name}>{goodsId.title}</h3>
                        <div className={style.star_box}>
                            {Array.from({ length: goodsId.stars || 0 }, (_, index) => (
                                <span className={style.stars} key={index}>★</span>
                            ))}
                        </div>
                        <p className={style.text}>Выберите размер</p>
                        <div>
                           <div className={style.flex}>
                               {goodsId.sizes.map((item, i) => {
                                   return <span key={i} className={style.size}>{item}</span>
                               })}
                           </div>
                            <div className={style.price_box}>
                                <span className={style.price}>{goodsId.price} ₽</span>
                                <span className={style.old_price}>{goodsId.oldPrice} ₽</span>
                            </div>
                            <Button className={'goods__btn'} title={'Заказать'} />
                            <ul className={style.list_pay}>
                                <li className={style.pay}>Бесплатная доставка до двери</li>
                                <li className={style.pay}>Оплата заказа при получении</li>
                                <li className={style.pay}>Оплата заказа при получении</li>
                            </ul>
                            <p className={style.characteristic}>Характеристики</p>
                            <ul className={style.list}>
                                <li>Пол: {goodsId.gender}</li>
                                <li>Цвета: {goodsId.color}</li>
                                <li>Состав: {goodsId.compound}</li>
                                <li>Страна: {goodsId.country}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};