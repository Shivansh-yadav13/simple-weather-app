import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
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
    <Container>
      <Heading>Simple Weather App 🌤</Heading>
      <div className="alert alert-danger" role="alert" style={weatherData ? (weatherData.alerts ? { display: "unset" } : { display: "none" }) : { display: "none" }}>
        {weatherData ? (weatherData.alerts ? weatherData.alerts[0].description : "") : ""}
      </div>
      {weatherData ? <h5>Region: {weatherData.timezone}</h5> : <h5>Region: Finding you...</h5>}
      <CurrentWeather weatherData={weatherData} />
      <DailyWeather weatherData={weatherData} />
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
`

const Heading = styled.h1`
  font-size: 5rem;
`

export default App;
