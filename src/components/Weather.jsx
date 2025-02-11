import React, { useEffect, useState, useRef } from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'

const Weather = () => {
    const inputRef = useRef()

    const [weatherData, setWeatherData] = useState(false);

    const allIcons = {
      '01d': clear_icon,
      '02d': cloud_icon,
      '03d': cloud_icon,
      '04d': cloud_icon,
      '09d': rain_icon,
      '10d': rain_icon,
      '11d': wind_icon,
      '13d': snow_icon,
      '50d': drizzle_icon,
      '01n': cloud_icon,
      '02n': cloud_icon,
      '03n': cloud_icon,
      '04n': cloud_icon,
      '09n': rain_icon,
      '10n': rain_icon,
      '11n': wind_icon,
      '13n': snow_icon,
      '50n': drizzle_icon,
    }

    const search = async (city) => {
      try {
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9a4f5ba77592f01ce27236990b2e0a1e`;
          const response = await fetch(url, {mode: 'cors'});
          const data = await response.json();
          console.log(data);
          const icon = allIcons[data.weather[0].icon] || clear_icon;
          setWeatherData({
            temperature: Math.floor(data.main.temp),
            location: data.name,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            icon: icon
          });
      } catch (error) {

        
      }
    }

    useEffect(() => {
      search();
    }, [])

  return (
    <div className='weather'>
        <div className='search-bar'>
            <input ref={inputRef} type='text' placeholder='Search'/>
            <img src={search_icon} alt='' onClick={()=>search(inputRef.current.value)}/>
        </div>
        <img src={weatherData.icon} alt='' className='weather-icon'/>
        <p className='temperature'>{weatherData.temperature}°C</p>
        <p className='location'>{weatherData.location}</p>
        <div className='weather-data'>
          <div className='col'>
            <img src={humidity_icon} alt=''/>
            <div>
              <p>{weatherData.humidity} %</p>
              <span>Humidity</span>
            </div>
          </div>
          <div className='col'>
            <img src={wind_icon} alt=''/>
            <div>
              <p>{weatherData.windSpeed} Km/h</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Weather
