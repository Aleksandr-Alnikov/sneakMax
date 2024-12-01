import style from './cartPage.module.css';
import {Button} from "../../components/Button/Button";
import {SubmitHandler, useForm} from "react-hook-form";
import {FormCart} from "../../types";
import {useAppDispatch, useAppSelector} from "../../components/Hooks/Hooks";
import {ModalProductsCart} from "../../components/ModalProductsCart/ModalProductsCart";
import {removeProduct} from "../../redux/cartSlise";


export const CartPage = () => {
    const {register, handleSubmit, reset} = useForm<FormCart>();
    const {cart} = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch();

    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);


    const onSubmit: SubmitHandler<FormCart> = async (data: FormCart) => {

        const order = {
            products: cart,
            user: data,
        };
        try {
            const res = await fetch('https://296977f081116d4f.mokky.dev/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(order),
            });

            if (!res.ok) {
                throw new Error('Ошибка при отправке данных');
            }

            const result = await res.json();
            console.log(result);

            cart.forEach(item => {
                dispatch(removeProduct(item.id));
            });

            reset();
        } catch (e) {
            console.error(e);
        }
    };


    return (
        <section>
            <div className="container">
                <h2 className={style.title}>Оформление заказа</h2>
                <p className={style.art}>Заказ: 3456 67</p>
                <div className={style.wrapper}>
                    <p className={style.price}>Товаров в заказе: {cart.length}шт</p>
                    <p className={style.price}>Общфя сумма заказа:{totalPrice} ₽</p>
                    <button className={style.btn}>Состав заказа</button>
                    <ul>

                    </ul>
                    {
                        cart.map(item => {
                            return <ModalProductsCart item={item} key={item.id}/>
                        })
                    }
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        <input type="text" placeholder={'Ваше имя'} {...register('name',{required: true})} />
                    </label>
                    <label>
                        <input type="tel" placeholder={'Номер телефона'} {...register('phone',{required: true})} />
                    </label>
                    <label className={style.label}>
                        <input type="email" placeholder={'E-mail'} {...register('email',{required: true})} />
                    </label>
                    <Button className={'cart__btn'} title={'Оформить заказ'}/>
                </form>
            </div>
        </section>
    );
};