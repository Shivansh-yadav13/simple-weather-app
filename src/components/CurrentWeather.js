import React from 'react'
import styled from 'styled-components'
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
                <Card>
                    <LeftContent>
                        <UL>
                            <li>{weatherData ? Math.trunc(weatherData.current.temp - 273) : <span className="placeholder col-1"></span>}°C</li>
                            <li>Humidity: - {weatherData ? weatherData.current.humidity : <span className="placeholder col-1"></span>}%</li>
                            <li>Wind Speed: - {weatherData ? weatherData.current.wind_speed : <span className="placeholder col-1"></span>}km/h</li>
                            <li>Weather: - {weatherData ? weatherData.current.weather[0].main : <span className="placeholder col-1"></span>}</li>
                            <li>Dew Point: - {weatherData ? Math.trunc(weatherData.current.dew_point - 273) : <span className="placeholder col-1"></span>}°C</li>
                        </UL>
                    </LeftContent>
                    <RightContent>
                        {weatherData ? <img style={{ width: '5rem' }} src={`http://localhost:8080/images/${weatherData.current.weather[0].main}.png`} alt="" /> : ""}
                    </RightContent>
                </Card>
                <Charts>
                    <LineChart width={1000} height={300} data={hrData}>
                        <CartesianGrid></CartesianGrid>
                        <XAxis dataKey="hr"></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                        <Legend></Legend>
                        <Line type="monotone" dataKey="Temp" stroke="red"></Line>
                        <Line type="monotone" dataKey="WindSpeed" stroke="blue"></Line>
                    </LineChart>
                </Charts>
            </Container>
        </>
    )
}

const Charts = styled.div`
    width: fit-content;
    display: flex;
    padding: 2rem;
    margin: 2rem;
    background: rgba(0,0,0,0.25);
    backdrop-filter: blur(14px);
    box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
    border-radius: 20px;
`

const Container = styled.div`
    text-align: center;
    display: flex;
`
const Card = styled.div`
    display: flex;
    border-radius: 20px;
    padding: 2rem;
    margin: 2rem;
    height: fit-content;
    background: rgba(0,0,0,0.25);
    backdrop-filter: blur(14px);
    box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
`

const LeftContent = styled.div`
    list-style: none;
    font-size: 1.5rem;
`

const RightContent = styled.div``

const UL = styled.ul`
    text-align: left;
    list-style: none;
    text-align: left;
`
export default CurrentWeather