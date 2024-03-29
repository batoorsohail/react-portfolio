import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
function App() {
  return (
    <main>
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
