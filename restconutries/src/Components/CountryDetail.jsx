import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const CountryDetail = ({data}) => {
    const countryName = data.name
    const flag = data.flags.png
    const numOfPopulation = data.population
    const nameOfRegion = data.region
    const nativeName = data.languages.map(L => L.nativeName)
    const subRegion = data.subregion
    const nameOfCapital = data.capital
    const Domain = data.topleveldomain
    const Currency = data.currencies.map(c => c.name)
    const Language = data.languages.map(n => n.name)
  return (
    <Wrapper>
        <Nav />
        <div>
            <div className="back-to-home">
                <button>Back</button>
            </div>
            <div>
                <img src={flag} alt={countryName} />
                <div>
                    <h3>{countryName}</h3>
                    <ul>
                        <li><strong>Native Name: </strong> <span>{nativeName}</span></li>
                        <li><strong>population: </strong> <span>{numOfPopulation}</span></li>
                        <li><strong>Region: </strong> <span>{nameOfRegion}</span></li>
                        <li><strong>SubRegion: </strong> <span>{subRegion}</span></li>
                        <li><strong>Capital: </strong> <span>{nameOfCapital}</span></li>
                    </ul>
                    <ul>
                        <li><strong>Top Level Domain: </strong> <span>{Domain}</span></li>
                        <li><strong>Currencies: </strong> <span>{Currency}</span></li>
                        <li><strong>Language: </strong> <span>{Language}</span></li>
                    </ul>
                </div>
                <div>
                    {/* <p><strong>Borders: </strong><span></span></p> */}
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    
`

export default CountryDetail;