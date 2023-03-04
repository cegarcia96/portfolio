import { useState, useRef } from 'react';
import About from './About';
import Projects from './Projects';
import Welcome from './Welcome';
import Skills from './Skills';
import Nav from './Nav';

function App() {

  const [displayNav, setDisplayNav] = useState(false);

  const aboutRef = useRef();
  const skillRef = useRef();
  const projectRef = useRef();

  return (
    <div className="main-container">
      {displayNav ? <Nav aboutRef={aboutRef} skillRef={skillRef} projectRef={projectRef} /> : null}
      <Welcome setDisplayNav={setDisplayNav} />
      <About aboutRef={aboutRef}/>
      <Skills skillRef={skillRef} projectRef={projectRef}/>
      <Projects/>
    </div>
  );
}

export default App;
