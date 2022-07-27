import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import { Navbar, Copyright } from './components';
import { Home, CV, Projects, Contact } from './containers';
import './app.css';
import GlobalStyle from './GlobalStyle';

const App = () => {
  const [bg, setBg] = useState('#4dd6cb');
  return (
    <div className='App'>
      <GlobalStyle bgColour={bg}/>
      <h1>Liam Boyd</h1>
      <div className='navbar'>
        <Navbar bgChanger={setBg}/>
      </div>
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cv' element={<CV/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
      <Copyright />
    </div>
  )
}

export default App