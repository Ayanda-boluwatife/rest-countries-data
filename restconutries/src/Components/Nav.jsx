import React from 'react';
import styled from 'styled-components';

const Nav = (props) => {
  return (
    <Wrapper>
        <div className="nav-bar page-center">
            <h1>Where In The World?</h1>
            <div className='dark-light'>
             <label>
                <input type="checkbox" checked={props.isDarkMode} onChange={props.onToggle} />
                Dark Mode
             </label>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
width: 100%;
transition: ease-in-out .9s;

 .nav-bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0;
}  

.dark-light button{
    border: none;
    display:flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    background-color: transparent;
    color: black;
}

@media screen and (max-width:900px){
    .nav-bar h1{
        font-size: 20px;
        font: caption bold;
    }
    .nav-bar{
        padding: 30px;
    }
    .dark-light p{
        font-size: 20px;
    }
}
`

export default Nav;