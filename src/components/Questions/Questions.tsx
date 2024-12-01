import style from './questions.module.css';
import {Button} from "../Button/Button";
import img from '../../img/inst.png';
import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';
import img4 from '../../img/4.jpg';
import img5 from '../../img/5.jpg';
import {SubmitHandler, useForm} from "react-hook-form";
import {Form} from "../../types";






export const Questions = () => {
    const {register, handleSubmit, reset} = useForm<Form>();

    const onSubmit: SubmitHandler<Form> = (data: Form) => {
        console.log(data);
        reset();
    };

    return (
        <section>
            <div className="container">
                <div className={style.wrapper}>
                    <div className={style.form_wrapper}>
                        <h3 className={style.title}>Есть вопросы?</h3>
                        <p className={style.description}>Заполните форму и наш менеджер свяжется с вами</p>
                        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                            <label>
                                <input
                                    type='text'
                                    {...register('name',{required: true})}
                                    placeholder='Ваше имя'
                                />
                            </label>
                            <label>
                                <input type='tel'
                                       {...register('phone',{required: true})}
                                       placeholder='Ваш телефон'
                                />
                            </label>
                            <Button title={'Отправить'} className={'form__btn'} />
                        </form>
                    </div>
                    <div className={style.inst}>
                        <img className={style.image} src={img} alt="instagram-logo"/>
                            <ul className={style.list}>
                                <li>
                                    <img src={img1} alt="instagram-logo"/>
                                </li>
                                <li>
                                    <img src={img2} alt="instagram-logo"/>
                                </li>
                                <li>
                                    <img src={img3} alt="instagram-logo"/>
                                </li>
                                <li>
                                    <img src={img4} alt="instagram-logo"/>
                                </li>
                                <li>
                                    <img src={img5} alt="instagram-logo"/>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};