import React from 'react'
import styled from 'styled-components'
import Header from './Header'

function CurrentWeather({ weatherData }) {
    return (
        <>
            <Header weatherData={weatherData} />
            <Container>
                <Card>
                    <LeftContent>
                        <h2>Today's</h2>
                        <UL>
                            <li>{weatherData ? Math.trunc(weatherData.current.temp - 273) : <span className="placeholder col-1"></span>}°C</li>
                            <li>Humidity: - {weatherData ? weatherData.current.humidity : <span className="placeholder col-1"></span>}%</li>
                            <li>Wind Speed: - {weatherData ? weatherData.current.wind_speed : <span className="placeholder col-1"></span>}km/h</li>
                            <li>Weather: - {weatherData ? weatherData.current.weather[0].main : <span className="placeholder col-1"></span>}</li>
                        </UL>
                    </LeftContent>
                    <RightContent>
                        {weatherData ? <img style={{ width: '5rem' }} src={`http://localhost:8080/images/${weatherData.current.weather[0].main}.png`} alt="" /> : ""}
                    </RightContent>
                </Card>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    color: white;
    text-shadow: 2px 2px rgba(0,0,0,0.2);
`
const Card = styled.div`
    display: flex;
    justify-content: space-around;
    border-radius: 20px;
    padding: 1.5rem;
    width: 40rem;
    background: rgba(0,0,0,0.25);
    backdrop-filter: blur(14px);
    box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
`

const LeftContent = styled.div`
    list-style: none;
    font-size: 1.5rem;
`

const RightContent = styled.div`
`
const UL = styled.ul`
    text-align: left;
    list-style: none;
    text-align: left;
`
export default CurrentWeather