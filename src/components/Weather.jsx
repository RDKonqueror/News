import React, { useState, useEffect } from 'react';
import { SunFill } from 'react-bootstrap-icons';

const Weather = () => {
    const [weather, setWeather] = useState([]);
    const [temp, setTemp] = useState([]);

    const getWeatherData = () => {
        // lat 22.5726723 lon 88.3638815
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=22.5726723&lon=88.3638815&appid=987078d57bb59933aac3a2202dcbd209&units=metric').then(function (response) {
            // console.log(response)
            return response.json();
        })
            .then(function (data) {
                //  console.log(data);
                 setTemp(data.main.temp);
                  setWeather(data.weather[0]);
            });
    };

    useEffect(() => {
        getWeatherData()
    }, []);

    return (
        <div className="weather">
            {
                // weather.map((curElem) => {
                //     return (
                    }
                        <div>
                            <p><span>{Number(temp).toFixed()}°C</span>{weather.main}</p>
                            <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} />
                        </div>
                    {/* )
                })
            } */}
            <a href="#">See full forecast</a>
        </div>
    )
};

export default Weather;