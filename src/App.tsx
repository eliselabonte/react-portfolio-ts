import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Name from './components/Name';


function App() {
  return (
    <body className="body">
      <Name />
      <div className='mountain-background'></div>
          {/* <div className='black-background'> */}
            <Header />
            <Portfolio />
          {/* <Footer /> */}
          {/* </div> */}
    </body>
  )
}

export default App;