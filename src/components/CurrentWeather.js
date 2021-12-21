import React from 'react'
import { Container, Card, UL, Chart } from './Styles'
import { CartesianGrid, Legend, LineChart, Tooltip, XAxis, YAxis, Line } from 'recharts'

function CurrentWeather({ weatherData }) {

    let hrData = []

    if (weatherData) {
        for (let i = 0; i < 48; i++) {
            hrData[i] = {
                hr: i,
                Temp: Math.trunc(weatherData.hourly[i].temp - 273),
                WindSpeed: weatherData.hourly[i].wind_speed,
            }
        }
    }

    return (
        <>
            <Container>
                <Card fontSize="1.5rem" width="50rem">
                    <div>
                        <UL>
                            <li>{weatherData ? Math.trunc(weatherData.current.temp - 273) : <span className="placeholder col-1"></span>}°C</li>
                            <li>Humidity: - {weatherData ? weatherData.current.humidity : <span className="placeholder col-1"></span>}%</li>
                            <li>Wind Speed: - {weatherData ? weatherData.current.wind_speed : <span className="placeholder col-1"></span>}km/h</li>
                            <li>Weather: - {weatherData ? weatherData.current.weather[0].main : <span className="placeholder col-1"></span>}</li>
                            <li>Dew Point: - {weatherData ? Math.trunc(weatherData.current.dew_point - 273) : <span className="placeholder col-1"></span>}°C</li>
                        </UL>
                    </div>
                    <div>
                        {weatherData ? <img style={{ width: '5rem' }} src={`https://raw.githubusercontent.com/Shivansh-yadav13/simple-weather-app/main/src/assests/images/${weatherData.current.weather[0].main}.png`} alt="" /> : ""}
                    </div>
                </Card>
                <Chart>
                    <LineChart width={1000} height={300} data={hrData}>
                        <CartesianGrid></CartesianGrid>
                        <XAxis dataKey="hr"></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                        <Legend></Legend>
                        <Line type="monotone" dataKey="Temp" stroke="red"></Line>
                        <Line type="monotone" dataKey="WindSpeed" stroke="blue"></Line>
                    </LineChart>
                </Chart>
            </Container>
        </>
    )
}


export default CurrentWeather