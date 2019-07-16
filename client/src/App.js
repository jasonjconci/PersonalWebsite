import React from 'react';
import './App.css';

import HeaderTwo from './components/HeaderTwo.js';
import Footer from './components/Footer.js';
import Routes from './components/Routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router className="router">
        <HeaderTwo style={{width: "100%"}}/>
        <Routes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
