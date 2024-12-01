import {Logo} from "../Logo/Logo";
import {Navigation} from "../Navigation/Navigation";
import style from "./footer.module.css";

export const Footer = () => {

    return (
        <footer className={style.footer}>
            <div className="container">
                <div className={style.wrapper}>
                    <Logo />
                    <Navigation />
                </div>
            </div>
        </footer>
    );
};