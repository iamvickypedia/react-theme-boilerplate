import React from 'react';
import './App.scss';
import Works from "./components/works/Works";
import changeTheme from "./theming/Theming";

function App() {
  const toggleTheme = (themecolor)=>{
    changeTheme(themecolor)
  }
  return (
    <div id="AppRoot" className='appbody'>
      <div className="themeChangers">
        <button onClick={()=> toggleTheme('light')}>light</button>
        <button onClick={()=> toggleTheme('dark')}>dark</button>
        <button onClick={()=> toggleTheme('dreamy')}>dreamy</button>
      </div>
      <Works/>
      <Works/>
      <Works/>
      <Works/>
      <Works/>
      <Works/>
      <Works/>
      <Works/>
      <Works/>
      <Works/>
      <Works/>
      <Works/>
      <Works/>
    </div>
  );
}

export default App;
