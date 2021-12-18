import React from 'react'
import styled from 'styled-components'

function dailyWeather({ weatherData }) {
    return (
        <>
            <p className="heading">Daily Weather ☀</p>
            <Container>
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
                                <img style={{width: '4rem'}} src={`http://localhost:8080/images/${info.weather[0].main}.png`} className="card-img-top" alt="..." />
                            </RightContent>
                        </Card>
                    )
                }) : <div className="spinner-border text-primary" role="status" style={{ position: 'relative', left: '100%', marginLeft: '16rem' }}>
                    <span className="visually-hidden">Loading...</span>
                </div>}
            </Container>
        </>
    )
}

const Container = styled.div`
    margin-left: 6rem;
    margin-botto: 2rem;
    display: grid;
    grid-template-columns: auto auto auto auto;
    row-gap: 2rem;
    color: white;
    text-shadow: 2px 2px rgba(0,0,0,0.2);
`
const Card = styled.div`
    display: flex;
    justify-content: space-around;
    width: 20rem;
    background: rgba(255,255,255,0.25);
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