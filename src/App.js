import React, {useState} from 'react'
import {fetchData} from './api/fetchData'
import './App.css'

import WeatherCard from './WeatherCard'

 const App = () => {

    const [query, setQuery] = useState('')

    const [weather, setWeather] = useState({})

    //will be called on the onKeyPress event and we only want to fire if they press enter so check that first
    const getResults = async (e) => {
        if (e.key === 'Enter') {
           const data = await fetchData(query)
           console.log(data);
           setWeather(data)

           //clear input from state after enter search
                setQuery('')
        }
    }


    return (
        <div className='main-container'>
            <input
                type='text'
                placeholder='Search city or zipcode..'
                className='search'
                value={query}
                onChange={ e => setQuery(e.target.value) }
                onKeyPress={getResults}
                />
            {/* SHOW CARD ONLY IF THERES ANY WEATHER INFO  */}
            {weather.main ? (<WeatherCard weather={weather}/> ) : (<div className='city'> Search for weather by city name or by US and press enter </div>)}

        </div>
    )
}

export default App