import  React  from 'react';
import styled from 'styled-components';
const CountryCard = ({data}) => {
  const countryName = data.name
  const flag = data.flags.png
  const numOfPopulation = data.population
  const nameOfRegion = data.region
  const nameOfCapital = data.capital
  return (
    <Wrapper>
        <article>
          <div>
            <img src={flag} alt={countryName}/>
          </div>
            <div className='countrydetails'>
                <h3>{countryName}</h3>
                <ul>
                    <li><strong>population: </strong> <span>{numOfPopulation}</span></li>
                    <li><strong>region: </strong> <span>{nameOfRegion}</span></li>
                    <li><strong>capital: </strong> <span>{nameOfCapital}</span></li>
                </ul>
            </div>
        </article>
    </Wrapper>
  )
}
const Wrapper = styled.div`
max-width: 300px;
ul li strong{
  font-size: 20px;
  font-weight: 500;
}
ul li span{
  font-size: 20px;
}
img{
  width: 100%;
  max-width: 300px;
  height: 200px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
h3{
  font-size: 20px;
  margin-bottom: 20px;
}
.countrydetails{
  background-color: hsl(0, 0%, 52%);
  color: hsl(200, 15%, 8%);
  padding: 2rem 1rem;
  margin-bottom: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
@media screen and (max-width:900px){
  img{
    max-width: 350px;
  }
}
`
export default CountryCard;