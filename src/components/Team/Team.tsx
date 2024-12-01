import style from './team.module.css';
import {useAppDispatch, useAppSelector} from "../Hooks/Hooks";
import {useEffect} from "react";
import {fetchTeam} from "../../redux/teamSlice";
import {TeamList} from "../TeamList/TeamList";


export const Team = () => {
    const dispatch = useAppDispatch();
    const {team} = useAppSelector(state => state.team);

    useEffect(() => {
        dispatch(fetchTeam());
    }, [dispatch]);

    return (
        <section id={'team'} className={style.team}>
          <div className="container">
              <h2 className={style.title}>Наша команда</h2>
              <ul className={style.list}>
                  {team && team.map(item => {
                    return <TeamList item={item} key={item.id} />
                  })}
              </ul>
          </div>
        </section>
    );
};