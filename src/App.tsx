import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';
import Intro from './components/intro/Intro'
import Header from './components/header/Header';
import Navigation from './components/nav/Navigation';
import AboutMe from './components/about-me/AboutMe';
import Portfolio from './components/portfolio/Portfolio';
import Writing from './components/writing/Writing'
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {
  const [navOpen, setNavOpen] = useState<Boolean>(false);

  return (
    <BrowserRouter>
      <div className="body">
        <Intro />
        <Header navOpen={navOpen} setNavOpen={setNavOpen} />
        <Navigation navOpen={navOpen} />
        <main className="sections">
          <Portfolio />
          <Writing />
          <AboutMe />
          <Resume />
          <Contact />
        </main>
          <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;