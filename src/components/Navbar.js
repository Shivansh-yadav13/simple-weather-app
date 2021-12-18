import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Navbar() {
    return(
        <Nav>
            <Items>Simple Weather App 🌤</Items>
            <UL>
                <Link to='/'><Items>Home</Items></Link>
                <Link to='/weekly-weather'><Items>Weekly</Items></Link>
                <Items>Weather News</Items>
            </UL>
        </Nav>
    )
}

const UL = styled.ul`
    display:flex;
`
const Items = styled.li`
    color: white;
    text-shadow: 2px 2px rgba(0,0,0,0.2);
    text-decoration: none;
    cursor: pointer;
    border-radius: 15px;
    font-size: 1rem;
    list-style: none;
    padding: 1rem;
    margin-left: 1rem;
    &:hover {
        background: rgba(255,255,255,0.4);
        backdrop-filter: blur(14px);
        box-shadow: 0 8px 32px 0 rgba(31,38,135,0.2);
    }
`
const Nav = styled.nav`
    display: flex;
    background: rgba(0,0,0,0.4);
    backdrop-filter: blur(14px);
    box-shadow: 0 8px 32px 0 rgba(31,38,135,0.2);
    padding: .5rem;
`

export default Navbar