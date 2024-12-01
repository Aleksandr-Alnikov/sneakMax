import style from './faq.module.css';
import AccordionComponent from "../Accordion/Accordion";


export const Faq = () => {

    return (
        <section>
            <div className="container">
                <h2 className={style.title}>Часто задаваемые вопросы</h2>
                <AccordionComponent />
            </div>
        </section>
    );
};