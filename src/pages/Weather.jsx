import "../styles/weadermusic.scss"
import WeatherMusicItem from "../components/Weathermusicitem";
import axios from 'axios';
import { useState, useEffect } from 'react';
// import dotenv from"dotenv";
// dotenv.config();

function Weather(props) {
    const { musics } = props;
    const [result, setResult] = useState({});
    const [rain, setRain] = useState([]); // rain에 해당하는 음악을 저장할 상태
    const API_KEY =  process.env.REACT_APP_GOOGLE_MAP_API_KEY;

    const weatherMappings = {
        Clear: '맑은',
        Clouds: '구름이 거의 없는',
        scatteredclouds: '흩어져있는 구름',
        brokenclouds: '부서진 구름',
        showerrain: '샤워 비',
        Rain: '비가 오는',
        Thunderstorm: '천둥번개가 치는 날',
        snow: '눈',
        mist: '안개',
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${API_KEY}`;
                const response = await axios.get(url);
                setResult(response.data);
            } catch (err) {
                alert(err);
            }
        };

        fetchData(); // 페이지가 로드될 때 데이터를 불러옵니다.

        // 날씨에 따라 필터링된 음악가져오기.
        if (result.weather && weatherMappings[result.weather[0].main]) {
            const filteredMusicList = musics.filter(
                (e) => e.weather === weatherMappings[result.weather[0].main]
            );
            setRain(filteredMusicList);
        }
    }, [result.weather, musics]); // 날씨나 음악이 변경될 때마다 useEffect를 실행합니다.

    const getWeatherText = (weatherMain) => {
        return weatherMappings[weatherMain] || weatherMain;
    };

    return (
        <div className='weaderMusic'>
            <div className="appContentWrap">
                {Object.keys(result).length !== 0 && (
                    <div>
                        <div className="sky">{getWeatherText(result.weather[0].main)} 날. 듣기 좋은 음악 〉</div>
                    </div>
                )}
            </div>
            <div className="weader-grid">
                {rain.map((music) => {
                    return <WeatherMusicItem key={music.id} music={music} />
                })}
            </div>
        </div>
    );
}

export default Weather;
