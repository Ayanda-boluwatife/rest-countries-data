import { React } from 'react';
import styled from 'styled-components';

const SeachCountry = (props) => { 
  return (
    <Wrapper>
        <div className="search-input page-center">
            <input type="search" name="" id="" placeholder="Search for a country" value={props.searchTerm} onChange={props.onSearch}/>
            <select className="select" name="" id="">
                <option value="">Filter by region</option>
                <option value="">Africa</option>
                <option value="">America</option>
                <option value="">Asia</option>
                <option value="">Europe</option>
                <option value="">Oceania</option>
            </select>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.search-input{
    display: flex;
    justify-content: space-between;
    padding: 50px 0;
}
.search-input input{
    height: 6vh;
    width: 30%;
    padding: 10px;
    border: none;
    background-color: white;
    box-shadow: 0 3px 3px hsl(0, 7.6923076923076845%, 28.03921568627451%);
}  
.select{
    width: 15%;
    border: none;
    background-color: white;
    box-shadow: 0 3px 3px hsl(0, 7.6923076923076845%, 28.03921568627451%);
}
@media screen and (max-width:900px) {
    .search-input{
        display: flex;
        flex-direction: column;
    }
    .search-input input{
        width: 90%;
        margin: 25px;
    }
    .select{
        width: 40%;
        margin: 25px;
        height: 6vh;
        font-size: 15px;
    }
    .search-input input::placeholder{
        font-size: large;
    }
}
`
export default SeachCountry;