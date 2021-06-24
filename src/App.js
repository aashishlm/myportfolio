import React from 'react';
import './App.css';
import Navbar from "./components/mynavbar/mynavbar.component";
import MyCarousal from "./components/carousal/carousal";
import TitleMessage from './components/titlemsg/typewriter';
import About from './pages/About/about';
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container'
import Skill from './pages/Skills/skills'

const App = () => {
  return (
    <div className='app' style={{ position:"relative"}}>
      <Navbar />
      <MyCarousal/>
      <TitleMessage/>
      <div>
        <Parallax
        blur={{ min: -1000, max: 1000 }}
        bgImage={require('./assets/img/parallex/background.webp')}
        bgImageAlt="comming"
        strength={-200}
    >
        <Container className="container-box rounded">
         <Fade duration={500}>
          <About/>
          </Fade>
          
        </Container>
        </Parallax>
        
      </div>
      <Skill/>
      
    </div>
  );
}

export default App;
