import style from './slider.module.css';
import {SliderComponents} from "../SliderComponents/SliderComponents";


export const Slider = () => {

    return (
        <section id={'slide'}>
            <div className="container">
                <div className={style.wrapper}>
                    <SliderComponents />
                </div>
            </div>
        </section>
    );
};