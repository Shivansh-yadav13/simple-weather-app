import React from 'react'

function Header({ weatherData }) {
    return (
        <>
            <div className="alert alert-danger" role="alert" style={weatherData ? (weatherData.alerts ? { display: "unset" } : { display: "none" }) : { display: "none" }}>
                {weatherData ? (weatherData.alerts ? weatherData.alerts[0].description : "") : ""}
            </div>
            {weatherData ? <h5>Region: {weatherData.timezone}</h5> : <h5>Region: Finding you...</h5>}
        </>
    )
}

export default Header