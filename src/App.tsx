import './App.css';
import React, { useState } from 'react';
import Intro from './components/Intro';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <body className="body">
      <Intro />
      <Header />
      <main>
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </body>
  )
}

export default App;