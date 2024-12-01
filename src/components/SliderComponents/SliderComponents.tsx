import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import {FC} from "react";
import img from '../../img/sneak.jpg';
import img2 from '../../img/slide2.jpg';
import style from './sliderComponents.module.css';
import {Button} from "../Button/Button";

export const SliderComponents: FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Button className='slider__btn slick-arrow slick-next' title={'Следующий шаг'} />,
        prevArrow: <div className={style.sliderHidden} />,
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <div>
                        <h3 className={style.title}>Мы подберем идеальную пару для вас</h3>
                        <p className={style.text}>Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями </p>
                    </div>
                    <div>
                        <p className={style.type}>Какой тип кроссовок рассматриваете?</p>
                        <div className={style.sneak}>
                            <div>
                                <img className={style.img} src={img} alt="sneak"/>
                                <label className={style.custom_checkbox}>
                                    <input className={style.input} type="checkbox"/>
                                    <span className={style.checkmark}></span>
                                </label>
                            </div>
                            <div>
                                <img className={style.img} src={img} alt="sneak"/>
                                <label className={style.custom_checkbox}>
                                    <input className={style.input} type="checkbox"/>
                                    <span className={style.checkmark}></span>
                                </label>
                            </div>
                            <div>
                                <img className={style.img} src={img} alt="sneak"/>
                                <label className={style.custom_checkbox}>
                                    <input className={style.input} type="checkbox"/>
                                    <span className={style.checkmark}></span>
                                </label>
                            </div>
                            <div>
                                <img className={style.img} src={img} alt="sneak"/>
                                <label className={style.custom_checkbox}>
                                    <input className={style.input} type="checkbox"/>
                                    <span className={style.checkmark}></span>
                                </label>
                            </div>
                            <div>
                                <img className={style.img} src={img} alt="sneak"/>
                                <label className={style.custom_checkbox}>
                                    <input className={style.input} type="checkbox"/>
                                    <span className={style.checkmark}></span>
                                </label>
                            </div>
                            <div>
                                <img className={style.img} src={img} alt="sneak"/>
                                <label className={style.custom_checkbox}>
                                    <input className={style.input} type="checkbox"/>
                                    <span className={style.checkmark}></span>
                                </label>
                            </div>
                        </div>
                        <div className={style.wrapper_btn}>
                            <p className={style.count}>1 из 3</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3 className={style.title}>Мы подберем идеальную пару для вас</h3>
                        <p className={style.text}>Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями </p>
                    </div>
                    <div className={style.slider_wrapper}>
                        <p className={style.type}>Какой размер вам подойдет?</p>
                        <div className={style.wrapper_input}>
                            <label className={style.custom_checkbox}>
                                <input className={style.input} type="checkbox"/>
                                <span className={style.checkmark}></span>
                                менее 36
                            </label>
                            <label className={style.custom_checkbox}>
                                <input className={style.input} type="checkbox"/>
                                <span className={style.checkmark}></span>
                                36-38
                            </label>
                            <label className={style.custom_checkbox}>
                                <input className={style.input} type="checkbox"/>
                                <span className={style.checkmark}></span>
                                39-41
                            </label>
                            <label className={style.custom_checkbox}>
                                <input className={style.input} type="checkbox"/>
                                <span className={style.checkmark}></span>
                                42-44
                            </label>
                            <label className={style.custom_checkbox}>
                                <input className={style.input} type="checkbox"/>
                                <span className={style.checkmark}></span>
                                45 и больше
                            </label>
                        </div>
                        <img className={style.img_bg} src={img2} alt="slide"/>
                    </div>
                    <div className={style.wrapper_btn}>
                        <p className={style.count}>2 из 3</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3 className={style.title}>Мы подберем идеальную пару для вас</h3>
                        <p className={style.text}>Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями </p>
                    </div>
                    <div className={style.slider_wrapper}>
                        <p className={style.type}>Уточните какие-либо моменты</p>
                        <textarea className={style.area}></textarea>
                    </div>
                    <div className={style.wrapper_btn}>
                        <p className={style.count}>3 из 3</p>
                    </div>
                </div>
                <div>
                    <div className={style.form_box}>
                        <h3 className={style.title}>Ваша подборка готова!</h3>
                        <p className={style.final}>Оставьте свои контактные данные, чтобы бы мы могли отправить  подготовленный для вас каталог</p>
                    </div>
                    <div className={style.form_wrapper}>
                        <h4 className={style.form_title}>Получить предложение</h4>
                        <p className={style.form_text}>Получите подборку подходящих для вас моделей на почту</p>
                        <form>
                            <label>
                                <input className={style.input_form} type='text' placeholder='Ваше имя'/>
                            </label>
                            <label>
                                <input className={style.input_form} type='email' placeholder='Ваш E-mail'/>
                            </label>
                            <Button className={'form__button'} title={'Получить'} />
                        </form>
                    </div>
                </div>
            </Slider>
        </div>
    );
};
