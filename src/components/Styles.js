import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    grid-template-rows: auto;
    row-gap: 2rem;
    text-align: center;
`

export const CardContainer = styled.div`
    margin-bottom: 8rem;
    display: grid;
    grid-template-columns: auto auto auto auto;
    row-gap: 2rem;
    column-gap: 2rem;

    @media screen and (max-width: 1378px) {
        grid-template-columns: auto auto;
    }

    @media screen and (max-width: 674px) {
        grid-template-columns: auto;
    }
`

export const Card = styled.div`
    display: flex;
    justify-content: space-around;
    width: 20rem;
    font-size: ${(props) => props.fontSize};
    background: rgba(0,0,0,0.25);
    backdrop-filter: blur(14px);
    box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
    border-radius: 20px;

    @media screen and (max-width: 1378px) {
        width: ${(props) => props.width};
        padding: 2em;
    }

    @media screen and (max-width: 674px) {
        grid-template-columns: auto;
        padding: unset;
    }
`

export const UL = styled.ul`
    text-align: left;
    list-style: none;
`

export const Chart = styled.div`
    @media screen and (max-width: 1378px) {
        display: none;
    }
`