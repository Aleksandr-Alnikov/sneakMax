import style from './teamList.module.css';
import {Team} from "../../types";


type Props = {
    item:Team,
}

export const TeamList = ({item}: Props) => {

    return (
        <li>
            <img className={style.img} src={item.imgUrl} alt={item.name} />
            <h3 className={style.title}>{item.name}</h3>
            <p className={style.role}>{item.role}</p>
        </li>
    );
};