import React from 'react'
import { Container, CardContainer, Card, UL } from './Styles'

function dailyWeather({ weatherData }) {

    let chartData = []

    if (weatherData) {
        for (let i = 0; i < 8; i++) {
            chartData[i] = {
                day: i + 1,
                minTemp: Math.trunc(weatherData.daily[i].temp.min - 273),
                maxTemp: Math.trunc(weatherData.daily[i].temp.max - 273),
            }
        }
    }

    return (
        <>
            <p className="heading">Daily Weather ☀</p>
            <Container>
                <CardContainer>
                    {weatherData ? weatherData.daily.map((info, key) => {
                        return (
                            <Card>
                                <div>
                                    <h5>Day-{key + 1}</h5>
                                    <UL>
                                        <li>Min Temp: - {Math.trunc(info.temp.min - 273)}°C</li>
                                        <li>Max Temp: - {Math.trunc(info.temp.max - 273)}°C</li>
                                        <li>Humidity: - {info.humidity}%</li>
                                        <li>Wind Speed: - {info.wind_speed} km/h</li>
                                        <li>Weather: - {info.weather[0].main}</li>
                                    </UL>
                                </div>
                                <div>
                                    <img style={{ width: '4rem' }} src={`https://raw.githubusercontent.com/Shivansh-yadav13/simple-weather-app/main/src/assests/images/${info.weather[0].main}.png`} className="card-img-top" alt="..." />
                                </div>
                            </Card>
                        )
                    }) : <div className="spinner-border text-primary" role="status" style={{ position: 'relative', left: '100%', marginLeft: '16rem' }}>
                        <span className="visually-hidden">Loading...</span>
                    </div>}
                </CardContainer>
            </Container>
        </>
    )
}

export default dailyWeather