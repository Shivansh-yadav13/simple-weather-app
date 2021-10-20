import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [weatherData, setWeatherData] = useState()
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const getData = async () => {
        const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude ? position.coords.latitude : "43"}&lon=${position.coords.longitude ? position.coords.longitude : "-75"}&exclude={part}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
        const parsedWeatherData = await weatherData.json()
        setWeatherData(parsedWeatherData)
      }
      getData()
    }, (error) => {
      console.log(error)
    })

  }, [])
  return (
    <div className="main-div">
      <div className="alert alert-danger" role="alert" style={weatherData ? (weatherData.alerts ? { display: "unset" } : { display: "none" }) : { display: "none" }}>
        {weatherData ? (weatherData.alerts ? weatherData.alerts[0].description : "") : ""}
      </div>
      <p className="main-heading">Simple Weather App 🌤</p>
      <p className="region" >Region: {weatherData ? weatherData.timezone : <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>}</p>
      <div className="current-weather">
        <p className="heading">Current Weather ☁</p>
        <div className="card" >
          <ul className="list-group list-group-flush">
            <li className="list-group-item placeholder-glow">Temperature:- {weatherData ? Math.trunc(weatherData.current.temp - 273) : <span class="placeholder col-1"></span>}°C</li>
            <li className="list-group-item placeholder-glow">Humidity:- {weatherData ? weatherData.current.humidity : <span class="placeholder col-1"></span>}%</li>
            <li className="list-group-item placeholder-glow">Wind Speed:- {weatherData ? weatherData.current.wind_speed : <span class="placeholder col-1"></span>}km/h</li>
            <li className="list-group-item placeholder-glow">Weather:- {weatherData ? weatherData.current.weather[0].main : <span class="placeholder col-1"></span>}</li>
          </ul>
        </div>
      </div>
      <p className="heading">Daily Weather ☀</p>
      <div className="daily-weather">
        {weatherData ? weatherData.daily.map((info, key) => {
          return (
            <div className="card" style={{ width: "18rem", marginLeft: "5rem" }} key={key}>
              <img src={`https://source.unsplash.com/1500x700/?weather,${info.weather[0].description}`} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Day-{key + 1}</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Min Temp:- {Math.trunc(info.temp.min - 273)}°C</li>
                <li className="list-group-item">Max Temp:- {Math.trunc(info.temp.max - 273)}°C</li>
                <li className="list-group-item">Humidity:- {info.humidity}%</li>
                <li className="list-group-item">Wind Speed:- {info.wind_speed} km/h</li>
                <li className="list-group-item">Weather:- {info.weather[0].main}</li>
              </ul>
            </div>
          )
        }) : <div class="spinner-border text-primary" role="status" style={{ position: 'relative', left: '100%', marginLeft: '16rem' }}>
          <span class="visually-hidden">Loading...</span>
        </div>}
      </div>
    </div>
  )
}

export default App;
