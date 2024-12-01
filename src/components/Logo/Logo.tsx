import style from './logo.module.css'
import {Link} from "react-router-dom";


export const Logo = () => {

    return (
        <Link to='/'>
            <p className={style.logo}>SneakMax</p>
        </Link>

    );
};