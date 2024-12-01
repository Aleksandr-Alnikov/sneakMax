import {FC, useEffect, useState} from 'react';
import ReactSlider from 'react-slider';
import './PriceRangeSlider.css';
import {Button} from "../Button/Button";
import style from './range.module.css'
import {useAppDispatch, useAppSelector} from "../Hooks/Hooks";
import {Params} from "../../types";
import {resetFilter} from "../../redux/goodsSlice";


const PriceRangeSlider: FC<{ onApplyFilters: (newFilters: Params) => void }> = ({ onApplyFilters }) => {
    const [gender, setGender] = useState<string[]>([]);
    const [sizes, setSizes] = useState<string[]>([]);
    const dispatch = useAppDispatch();
    const goodsState = useAppSelector(state => state.goods);
    const priceRange = goodsState.priceRange || [0, 100000];
    const [range, setRange] = useState(priceRange);

    const handleSizeChange = (size: string) => {
        setSizes(prev => {
            if (prev.includes(size)) {
                return prev.filter(sizes => sizes !== size);
            } else {
                return [...prev, size];
            }
        });
    };

    const handleGenderChange = (gender: string) => {
        setGender(prev => {
            if (prev.includes(gender)) {
                return prev.filter(genders => genders !== gender);
            } else {
                return [...prev, gender];
            }
        });
    };

    const handleApplyFilters = () => {
        const genderQuery = gender.join(',');
        const num = sizes.map(size => parseInt(size, 10));
        onApplyFilters({gender: genderQuery,
                                 sizes:num,
                                 page: 1,
                                 minPrice: range[0],
                                 maxPrice: range[1],
        });
    };

    useEffect(() => {
        setRange(priceRange);
    }, [priceRange]);

    const handleReset = () => {
        setGender([]);
        setSizes([]);
        setRange([0, 100000]);
        dispatch(resetFilter());
        onApplyFilters({ gender: '', sizes: [], minPrice: 0, maxPrice: 100000, page: 1 });
    };

    return (
        <form className={style.form}>
            <div >
                <h4 className={style.title}>Подбор по параметрам</h4>
                <p className={style.price}>Цена, руб</p>
                <div className="price-range">
                    <label className={style.label_min}>
                        <input className={style.input_range} />
                        <span className={style.min}>{range[0]}</span>
                    </label>

                    <label className={style.label_max}>
                        <input className={style.input_range} />
                        <span className={style.max}>{range[1]}</span>
                    </label>
                </div>
                <div className="slider">
                    <ReactSlider
                        value={range}
                        min={0}
                        max={100000}
                        step={10}
                        onChange={setRange}
                        className="slider"
                        trackClassName="track"
                        thumbClassName="thumb"
                        renderTrack={(props, state) => (
                            <div
                                {...props}
                                style={{
                                    ...props.style,
                                    backgroundColor: state.index === 0 ? '#0b74de' : '#ddd',
                                }}
                            />
                        )}
                        renderThumb={(props) => (
                            <div
                                {...props}
                                style={{
                                    ...props.style,
                                    backgroundColor: '#0b74de',
                                    border: '2px solid #0b74de',
                                }}
                            />
                        )}
                    />
                </div>
            </div>
            <p className={style.sex}>Пол</p>
            <div className={style.sex_wrapper}>
                <label className={style.custom_checkbox}>
                    <input className={style.input} type="checkbox" checked={gender.includes('Мужской')} onChange={() => handleGenderChange('Мужской')} />
                    <span className={style.checkmark}></span>
                    Мужской
                </label>
                <label className={style.custom_checkbox}>
                    <input className={style.input} type="checkbox" checked={gender.includes('Женский')} onChange={() => handleGenderChange('Женский')} />
                    <span className={style.checkmark}></span>
                    Женский
                </label>
            </div>
            <p className={style.size_text}>Размер</p>
            <div className={style.size}>
                {[35, 36, 37, 38, 39, 40, 41, 42, 43].map(size => (
                    <label key={size} className={style.custom_checkbox_size}>
                        <input className={style.input_size}
                               type="checkbox"
                               checked={sizes.includes(size.toString())}
                               onChange={() => handleSizeChange(size.toString())} />
                        <span className={style.checkmark_size}></span>
                        <span className={style.span_size}>{size}</span>
                    </label>
                ))}
            </div>
            <div className={style.btn_wrapper}>
                <Button className={'sending_btn'} title={'Применить'} type={'button'} onClick={handleApplyFilters} />
                <Button className={'sending_btn'} title={'Сбросить'} onClick={handleReset} type={'button'}/>
            </div>
        </form>
    );
};

export default PriceRangeSlider;