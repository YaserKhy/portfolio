import Header from './Components/Header.js';
import About from './Components/About.js';
import Areas from './Components/Areas.js';
import AreasDict from './Data/AreasDict.js'
import Skills from './Components/Skills.js';
import SkillsArray from './Data/SkillsArray.js';
import Projects from './Components/Projects.js'
import ProjectsArray from './Data/ProjectsArray.js';
import Contact from './Components/Contact.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

function App() {

  const [numCards, setNumCards] = useState(3)
  const [skillsPerRow, setSkillsPerRow] = useState(4)

  // called only once
  useEffect(() => {
    const checkDeviceWidth = () => {
      if (window.innerWidth < 450) {
        setNumCards(2);
        setSkillsPerRow(3);
      }
      else {
        setNumCards(3);
        setSkillsPerRow(4);
      }
    }
    checkDeviceWidth();
    window.addEventListener('resize', checkDeviceWidth) // whenever user resize screen , perform checkDeviceWidth
    return () => { window.removeEventListener('resize', checkDeviceWidth) }
  }, []);

  return (
    <div>
      <Header />
      <About />
      <Areas AreasDict={AreasDict} numCards={numCards} />
      <Skills SkillsArray={SkillsArray} skillsPerRow={skillsPerRow} />
      <Projects ProjectsArray={ProjectsArray} />
      <Contact />
    </div>
  );
}

export default App;