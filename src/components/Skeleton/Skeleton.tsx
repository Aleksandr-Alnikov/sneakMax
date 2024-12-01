import style from './skeleton.module.css';
import ContentLoader from "react-content-loader";


export const Skeleton = ({count = 6}) => {

    return (
        <>
            {Array(count).fill(null).map((_, i) => {
                return (
                    <li key={i} className={style.skeleton}>
                        <ContentLoader
                            speed={2}
                            viewBox='0 0 420 600'
                            backgroundColor='rgba(0, 0, 0, 0.3)'
                            foregroundColor='ecebeb'>
                            <rect x='0' y='0' width='100%' height='70%' />
                            <rect x='24' y='calc(70% + 30px)' width='90%' height='30px' />
                            <rect x='24' y='calc(70% + 80px)' width='70%' height='25px' />
                        </ContentLoader>
                    </li>
                )
            })}
        </>
    );
}