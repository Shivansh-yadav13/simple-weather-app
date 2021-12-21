import React, { useState, useEffect } from 'react'
import './App.css'

import CurrentWeather from './components/CurrentWeather'
import DailyWeather from './components/DailyWeather'

function App() {
  const [weatherData, setWeatherData] = useState()
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const getData = async () => {
        const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude ? position.coords.latitude : "43"}&lon=${position.coords.longitude ? position.coords.longitude : "-75"}&exclude={part}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
        const parsedWeatherData = await weatherData.json()
        setWeatherData(parsedWeatherData)
        console.log(parsedWeatherData)
      }
      getData()
    }, (error) => {
      console.log(error)
    })
  }, [])
  return (
    <div style={{textAlign: 'center'}}>
      <h1 style={{fontSize: '5rem', padding: '2rem'}} >Simple Weather App 🌤</h1>
      <div className="alert alert-danger" role="alert" style={weatherData ? (weatherData.alerts ? { display: "unset" } : { display: "none" }) : { display: "none" }}>
        {weatherData ? (weatherData.alerts ? weatherData.alerts[0].description : "") : ""}
      </div>
      {weatherData ? <h5>Region: {weatherData.timezone}</h5> : <h5>Region: Finding you...</h5>}
      <CurrentWeather weatherData={weatherData} />
      <DailyWeather weatherData={weatherData} />
    </div>
  )
}

export default App;
