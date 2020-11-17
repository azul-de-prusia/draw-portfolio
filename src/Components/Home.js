import React, {Component} from 'react';	

import { Link } from 'react-router-dom';	

class Home extends Component{	
    render(){	
        return(	

            <div className="useless">	
                <div>	
                <h1 id="header">Hi, please choose a category to see something beautiful</h1> 	

                </div>	
                <div className="flip-container">	
                    <ul className="ulhome">	
           
                        <li id="list"><Link to="/Digital" ><button id="link"><img src="https://i.ibb.co/9nhwSpX/digital.jpg" height="100px" alt="x" /><br/>Digital art</button></Link></li>	
                        <li id="list"><Link to="/Engraving" ><button id="link"><img src="https://i.ibb.co/x8ZjWGw/grabado.jpg" height="100px" alt="x" /><br/>Engraving</button></Link></li>
                        <li id="list"><Link to="/Anatomy" ><button id="link"><img src="https://i.ibb.co/M6RPcrn/anatmia.jpg" height="100px" alt="x" /><br/>Anatomy</button></Link></li>
                        <li id="list"><Link to="/Ink" ><button id="link"><img src="https://i.ibb.co/HPwHDcL/tinta.jpg" height="100px" alt="x" /><br/>Ink draws</button></Link></li>
                        <li id="list"><Link to="/Watercolor" ><button id="link"><img src="https://i.ibb.co/GcJz1rh/acuarela.jpg" height="100px" alt="x" /><br/>Watercolor</button></Link></li>
                    </ul>	

                <div>{/*
                    <ul className="storyboard">
                        
                        <p>Feeling curious about how do I tell a story on images? Choose one of the following:</p>
                         
                            < Link to="/Lycaon">Lycaon pictus. An endangered african endemic dog </ Link>
           
                        <p>- Deer. A deer's life</p>
                        <p>- My fist time adopting a dog. 4 comic strip.</p>
                    
                    </ul>
                */}</div>

        </div>	
        <footer>This project was developed with React js by Azul de Prusia</footer>
                

            </div>	

        );	

    }	
};	

export default Home;