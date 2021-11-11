import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <body className="body">
      <Header />
      <Portfolio />
      <Footer />
    </body>
  )
}

export default App;