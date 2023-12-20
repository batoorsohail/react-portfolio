import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills'

const App = () => (
  <main className="h-screen">
    <Navbar />
    <Hero />
    <About />
    <Skills />
  </main>
);

export default App;
