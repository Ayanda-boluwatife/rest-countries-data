import './App.css';
import Nav from './Components/Nav';
import SeachCountry from './Components/SeachCountry';
import React, { useState } from 'react';
import CountryCards from './Components/CountryCards';

  function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
  
    function handleToggle() {
      setIsDarkMode(!isDarkMode);
    }
  
    function handleSearch(event) {
      setSearchTerm(event.target.value);
    }
  return (
    <div className="App">
      <Nav isDarkMode={isDarkMode} onToggle={handleToggle} />
      <SeachCountry searchTerm={searchTerm} onSearch={handleSearch} />
      <CountryCards isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
