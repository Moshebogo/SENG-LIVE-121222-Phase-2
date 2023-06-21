import { useState } from 'react'




const Header = () => {
  const [ isDarkMode, setDarkMode ] = useState(true)
  const modeText = isDarkMode ? 'Dark Mode' : 'Light Mode'
  
  function handelClick(e) {
           setDarkMode(preValue => !preValue)
  }
  




      return (
        <header>
          <h1>
            <span className="logo">{"//"}</span>
            Project Showcase
          </h1>
          <button onClick={ handelClick }>{ modeText }</button>
        </header>
      );
}

export default Header;
