import React from 'react';
import './App.css';
import Navbar from "./components/mynavbar/mynavbar.component";
import MyCarousal from "./components/carousal/carousal";
import TitleMessage from './components/titlemsg/typewriter';
import About from './pages/About/about';

import Skills from './pages/skills/skills.component';
import Experience from './pages/Experience/experience';
import Timeline from './components/project-timelime/timeline'
import Contact from './pages/contactform/contact';
import FooterPanel from './components/footer/footer';

const App = () => {
  return (
    <div className='App' style={{ position:"relative"}}>
      <Navbar/>
      <MyCarousal/>
      <TitleMessage/>
      <About/>
      <Skills/>
      <Experience/>
      <Timeline/>
      <Contact/>
      <FooterPanel/>
      
    </div>
  );
}

export default App;
