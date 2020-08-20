import React from 'react'

function WeatherCard({weather}) {
    return (
        <div className='city'>
            {/* city name */}
            <h2 className='city-name'>
                 <span>{weather.name}</span> 
                 <sup>  {weather.sys.country} </sup>
            </h2>
            {/* city temp */}
            <div className='city-temp'>
               {Math.round(weather.main.temp)} 
                <sup> &deg; F </sup>
            </div>
            {/* weather icon */}
            <div className='info'>
            <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
            </div>
            <p> {weather.weather[0].description}</p>
            
        </div>
    )
}

export default WeatherCard
