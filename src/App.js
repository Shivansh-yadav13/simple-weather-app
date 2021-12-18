import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import './App.css'

import CurrentWeather from './components/CurrentWeather'
import DailyWeather from './components/DailyWeather'
import Navbar from './components/Navbar'

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
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<CurrentWeather weatherData={weatherData} />} />
          <Route exact path='/weekly-weather' element={<DailyWeather weatherData={weatherData} />} />
        </Routes>
      </Router>
      
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
`

export default App;
