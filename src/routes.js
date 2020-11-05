import React, {Component} from 'react';	
import { Switch, Route} from 'react-router-dom';	
import Header from './Components/header';	
import Home from './Components/Home';	
import About from './Components/About';	
import Contact from './Components/Contact';	
import Useless from './Components/Useless';	
import Skills from './Components/Skills';	
import Digital from './Components/Digital';
import Ink from './Components/Ink';
import Engraving from './Components/Engraving';
import Watercolor from './Components/Watercolor';
import Anatomy from './Components/Anatomy';


const Routes = () => (	


    <Switch> 	
      <Route exact path="/" component ={Home}/>	
      <Route path="/Header" component ={Header}/>	
      <Route path="/About" component ={About}/>	
      <Route path="/Home" component ={Home}/>	
      <Route path="/Contact" component ={Contact}/>	
      <Route path="/Useless" component ={Useless}/>	
      <Route path="/Skills" component ={Skills}/>	
      <Route path="/Digital" component ={Digital}/>
      <Route path="/Ink" component ={Ink}/>
      <Route path="/Engraving" component ={Engraving}/>
      <Route path="/Watercolor" component ={Watercolor}/>
      <Route path="/Anatomy" component ={Anatomy}/>
    </Switch>	

      )	

  export default Routes;