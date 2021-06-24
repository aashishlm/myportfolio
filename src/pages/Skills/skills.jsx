import React from 'react'
import './skill.css'
import Card from 'react-bootstrap/Card'
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_SASS from "../../assets/img/skills/sass-1.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_REACT_ROUTER from "../../assets/img/skills/react-router.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import L_STYLED_COMPONENTS from "../../assets/img/skills/styled-components.svg";

const Skills = () => {
    return (
    <>
    <h1 className='head'>Skills</h1>
    <div className='home'>
    <div className='home-row'>
        <Card className='hello' >
            <Card.Img className='size' variant="top" src={L_REACT} />
            <Card.Body>
            <Card.Title>REACT JS</Card.Title>
            
            </Card.Body>
        </Card>
        <Card className='hello'>
            <Card.Img className='size' variant="top" src={L_CSS3}/>
            <Card.Body>
            <Card.Title>CSS3</Card.Title>
            
            </Card.Body>
        </Card>
        
        </div>
            <div className='home-row'>
        <Card className='hello'>
            <Card.Img className='size' variant="top" src={L_REACT_BOOTSTRAP} />
            <Card.Body>
            <Card.Title>REACT BOOTSTRAP</Card.Title>
            
            </Card.Body>
        </Card>
        <Card className='hello'>
            <Card.Img className='size' variant="top" src={L_REACT_ROUTER} />
            <Card.Body>
            <Card.Title>REACT ROUTER</Card.Title>
            
            </Card.Body>
        </Card>
        <Card className='hello'>
            <Card.Img className='size' variant="top" src={ L_MATERIALUI} />
            <Card.Body>
            <Card.Title>MATERIAL UI</Card.Title>
            
            </Card.Body>
        </Card>
        
        </div>
            <div className='home-row'>
        <Card className='hello'>
            <Card.Img className='size' variant="top" src={L_HTML5}/>
            <Card.Body>
            <Card.Title>HTML5</Card.Title>
            
            </Card.Body>
        </Card>
        <Card className='hello'>
            <Card.Img className='size' variant="top" src={L_SASS} />
            <Card.Body>
            <Card.Title>SASS</Card.Title>
            
            </Card.Body>
        </Card>
        <Card className='hello'>
            <Card.Img className='size' variant="top" src={L_STYLED_COMPONENTS} />
            <Card.Body>
            <Card.Title>STYLED COMPONENTS</Card.Title>
            
            </Card.Body>
        </Card>
        
        </div>
        </div>
    </>
        
    );
};

export default Skills;
