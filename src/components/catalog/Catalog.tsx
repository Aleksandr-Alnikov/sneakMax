import style from './catalog.module.css';
import {useAppDispatch, useAppSelector} from "../Hooks/Hooks";
import {useEffect, useState} from "react";
import {clearGoods, fetchFilterGoods, fetchGoods} from "../../redux/goodsSlice";
import {Cards} from "../Cards/Cards";
import {Button} from "../Button/Button";
import Range from "../Range/Range";
import {Params} from "../../types";
import {Skeleton} from "../Skeleton/Skeleton";


export const Catalog = () => {
    const dispatch = useAppDispatch();
    const {goods, isLoading} = useAppSelector(state => state.goods);
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState<Params>({page: 1})


    const handleShowPage = () => {
        if (!isLoading) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    }

    useEffect(() => {
        const params = { ...filters, page: currentPage };

        if (filters.gender || filters.sizes || (filters.minPrice !== undefined && filters.maxPrice !== undefined)) {
            dispatch(fetchFilterGoods(params));
        } else {
            dispatch(fetchGoods(currentPage));
        }
    }, [currentPage, filters, dispatch]);

    const handleApplyFilters = (newFilters: Params) => {
        setFilters(newFilters);
        setCurrentPage(1);
        dispatch(clearGoods());
    };

    return (
        <section id='nav'>
            <div className="container">
                <h2 className={style.title}>Каталог</h2>
                <div className={style.wrapper}>
                    <div className={style.form_box}>
                        <Range onApplyFilters={handleApplyFilters} />

                    </div>
                    <div>
                        <ul className={style.list}>
                            {goods.length ? (
                                goods.map(item => (
                                    <Cards item={item} key={item.id} />
                                ))
                            ) : (
                                <Skeleton />
                            )}
                        </ul>
                        <Button className={'catalog__btn'} title={'Показать еще'} onClick={handleShowPage}/>
                    </div>
                </div>
            </div>
        </section>
    );
};