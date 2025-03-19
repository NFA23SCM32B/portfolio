import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Career from './components/Career';    // Career on same page
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Career />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
