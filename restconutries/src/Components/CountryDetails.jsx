import React from 'react';
import CountryDetail from './CountryDetail';
import allCountries from '../alldata';
import styled from 'styled-components';

const CountryDetails = () => {
  return (
    <Wrapper>
        <div></div>
        <div className="country-details page-center">
            {
                allCountries.map(country => {
                    return (
                        <CountryDetail key={country.name} data={country} />
                    )
                })
            }
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
`

export default CountryDetails;