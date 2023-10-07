import React, { useEffect, useState } from 'react';
import "./App.css"
import Home from './Home';
import About from './About';

import { BrowserRouter , Routes, Router,Route } from 'react-router-dom'

function App() {

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/about' element={<About></About>}></Route>
          <Route exact path='/' element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
