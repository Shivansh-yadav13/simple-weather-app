import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [weatherData, setWeatherData] = useState()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords)
      const getData = async () => {
        const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude ? position.coords.latitude : "43"}&lon=${position.coords.longitude ? position.coords.longitude : "-75"}&exclude={part}&appid=e0287bfe6f6cd9dd38ea0827934ae179`)
        const parsedWeatherData = await weatherData.json()
        console.log(parsedWeatherData)
        setWeatherData(parsedWeatherData)
      }
      getData()
    }, (error) => {
      console.log(error)
    })

  }, [])
  return (
    <div className="main-div">
      <p className="main-heading">Simple Weather App</p>
      <p className="region" >Region: {weatherData ? weatherData.timezone : ""}</p>
      <div className="current-weather">
        <p className="heading">Current Weather</p>
        {/* <p className="w-el">Time:- {weatherData ? Math.trunc((weatherData.timezone_offset / 60) / 100) : ""}:{weatherData ? (weatherData.timezone_offset / 60) % 100 : ""}</p> */}
        <p className="w-el">Temperature:- {weatherData ? Math.trunc(weatherData.current.temp - 273) : ""}°C</p>
        <p className="w-el">Humidity:- {weatherData ? weatherData.current.humidity : ""}%</p>
        <p className="w-el">Wind Speed:- {weatherData ? weatherData.current.wind_speed : ""}km/h</p>
        <p className="w-el">Weather:- {weatherData ? weatherData.current.weather[0].main: ""}</p>
      </div>
      <p className="heading">Daily Weather</p>
      <div className="daily-weather">
        {weatherData ? weatherData.daily.map((info, key) => {
          return (
            <div className="day-div" key={key}>
              <p className="header">Day-{key+1}</p>
              <p className="w-el-d" >Min Temp:- {Math.trunc(info.temp.min-273)}°C</p>
              <p className="w-el-d" >Max Temp:- {Math.trunc(info.temp.max-273)}°C</p>
              <p className="w-el-d" >Humidity:- {info.humidity}%</p>
              <p className="w-el-d" >Wind Speed:- {info.wind_speed} km/h</p>
              <p className="w-el-d" >Weather:- {info.weather[0].main}</p>
            </div>
          )
        }) : ""}
      </div>
    </div>
  )
}

export default App;
