import style from './header.module.css';
import {Navigation} from "../Navigation/Navigation";
import {Logo} from "../Logo/Logo";
import {ButtonCart} from "../ButtonCart/ButtonCart";


export const Header = () => {

    return (
      <header className={style.header}>
        <div className="container">
            <div className={style.wrapper}>
                <Logo />
                <Navigation />
                <ButtonCart />
            </div>
        </div>
      </header>
    );
};