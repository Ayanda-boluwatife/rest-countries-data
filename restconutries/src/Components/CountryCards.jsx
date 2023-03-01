import React from 'react'
import CountryCard from './CountryCard';
import allCountries from '../alldata';
import styled from 'styled-components';
const CountryCards = () => {
  return (
    <Wrapper>
        <div></div>
        <div className="country-details page-center">
            {
                allCountries.map(country => {
                    return (
                        <CountryCard key={country.name} data={country} />
                    )
                })
            }
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
background-color: hsl(0, 0%, 100%);
.country-details{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    gap: 2rem;   
}
@media screen and (max-width:900px){
    .country-details{
        grid-template-columns: 1fr;
        grid-auto-rows: 1fr;
        place-items: center;
    }
}
`
export default CountryCards;