import React from 'react'
import { Routes, Route } from 'react-router-dom';

import { Navbar, Copyright } from './components';
import { Home, CV, Projects, Contact } from './containers';
import './app.css';

const App = () => {
  return (
    <div className='App'>
      <h1>Liam Boyd</h1>
      <div className='navbar'>
        <Navbar />
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