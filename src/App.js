import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import './App.css';
import Dogs from './components/Dogs';
import SearchDog from './components/SearchDog';
import Home from './components/Home';
const App = () => {
  return (
  <Router>

        
      <Navbar className='menuitem' />

      <div className='container'>

        <Routes>
          <Route path="/" exact element={ <Home />} />
          <Route path="/Dogs" exact element={ <Dogs />} />
          <Route path="/SearchDog" exact element={ <SearchDog />} />
        </Routes>
      </div>
  </Router>
      )
}

export default App
