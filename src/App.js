import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import Hero from './Components/hero';
import About from './Components/about';
import Education from './Components/education';
import Skills from './Components/skills';
import Projects from './Components/projects';
import Contacts from './Components/contacts';
import Footer from './Components/footer';
import CustomScripts from './Components/CustomScripts';
import Certification from './Components/certification';
import ParticlesComponent from './Components/ParticlesComponent';


function App() {
  return (
   <>
   <Header/>
   <Hero/>
   <About/>
   <Education/>
   <Certification/>
   <Skills/>
   <Projects/>
   <Contacts/>
   <CustomScripts/>
   <ParticlesComponent/>
   <Footer/>
   </>
  );
}

export default App;
