import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const YandexMap = () => {
    return (
        <YMaps>
            <Map defaultState={{ center: [55.76, 37.64], zoom: 10 }} style={{ maxWidth: '800px', maxHeight: '500px' }}>
                <Placemark
                    geometry={[55.76, 37.64]}
                    properties={{
                        balloonContent: 'Я здесь!',
                    }}
                />
            </Map>
        </YMaps>
    );
};

export default YandexMap;