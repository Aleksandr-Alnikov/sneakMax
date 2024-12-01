import {Hero} from "../Hero/Hero";
import {Catalog} from "../catalog/Catalog";
import {Team} from "../Team/Team";
import {Faq} from "../Faq/Faq";
import {Contacts} from "../Contacts/Contacts";
import {Questions} from "../Questions/Questions";
import {About} from "../About/About";
import {Slider} from "../Slider/Slider";



export const Main = () => {

    return (
        <main>
            <Hero />
            <Catalog />
            <About />
            <Slider />
            <Team />
            <Faq />
            <Contacts />
            <Questions />
        </main>
    );
};