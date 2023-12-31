import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills'
import Projects from './sections/Projects';

const App = () => (
  <main className="h-screen">
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Skills />
  </main>
);

export default App;
