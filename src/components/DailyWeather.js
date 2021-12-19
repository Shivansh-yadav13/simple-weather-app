import React from 'react'
import styled from 'styled-components'
import { CartesianGrid, Legend, LineChart, Tooltip, XAxis, YAxis, Line } from 'recharts'

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
                                <LeftContent>
                                    <h5>Day-{key + 1}</h5>
                                    <UL>
                                        <li>Min Temp: - {Math.trunc(info.temp.min - 273)}°C</li>
                                        <li>Max Temp: - {Math.trunc(info.temp.max - 273)}°C</li>
                                        <li>Humidity: - {info.humidity}%</li>
                                        <li>Wind Speed: - {info.wind_speed} km/h</li>
                                        <li>Weather: - {info.weather[0].main}</li>
                                    </UL>
                                </LeftContent>
                                <RightContent>
                                    <img style={{ width: '4rem' }} src={`http://localhost:8080/images/${info.weather[0].main}.png`} className="card-img-top" alt="..." />
                                </RightContent>
                            </Card>
                        )
                    }) : <div className="spinner-border text-primary" role="status" style={{ position: 'relative', left: '100%', marginLeft: '16rem' }}>
                        <span className="visually-hidden">Loading...</span>
                    </div>}
                </CardContainer>
                <ChartContainer>
                    <LineChart width={1000} height={300} data={chartData}>
                        <CartesianGrid></CartesianGrid>
                        <XAxis dataKey="day"></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                        <Legend></Legend>
                        <Line type="monotone" dataKey="minTemp" stroke="green"></Line>
                        <Line type="monotone" dataKey="maxTemp" stroke="red"></Line>
                    </LineChart>
                </ChartContainer>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: grid;
    justify-content: center;
    grid-template-rows: auto;
    row-gap: 2rem;
`

const CardContainer = styled.div`
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: auto auto auto auto;
    row-gap: 2rem;
    column-gap: 2rem;
`

const Card = styled.div`
    display: flex;
    justify-content: space-around;
    width: 20rem;
    background: rgba(0,0,0,0.25);
    backdrop-filter: blur(14px);
    box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
    border-radius: 20px;
`

const ChartContainer = styled.div`
    width: fit-content;
    padding: 2rem;
    margin-left: 10rem;
    background: rgba(0,0,0,0.25);
    backdrop-filter: blur(14px);
    box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
    border-radius: 20px;
`

const UL = styled.ul`
    text-align: left;
    list-style: none;
`

const LeftContent = styled.div`
    list-style: none;
`
const RightContent = styled.div``

export default dailyWeather