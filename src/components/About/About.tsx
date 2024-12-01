import style from './about.module.css';
import img from '../../img/about.png';


export const About = () => {

    return (
        <section id={'about'} className={style.about}>
            <div className="container">
                <div className={style.wrapper}>
                    <h2 className={style.title}>Пара слов о нас</h2>
                    <p className={style.description}>Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через спорт мы можем менять жизни. В том числе с помощью воодушевляющих историй спортсменов. Чтобы помочь тебе подняться и двигаться вперед. </p>
                    <p className={style.label}>- SneakMax</p>
                </div>
                <img className={style.img} src={img} alt="about"/>
            </div>
        </section>
    );
};