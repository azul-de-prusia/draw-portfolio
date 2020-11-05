import React, {Component} from 'react';	
import '../App.css';	
import { Link } from 'react-router-dom';

class Engraving extends Component{	
    render(){	
        return(	
            <div className="flip-container">	
                <h1 id="header">Printmaking</h1>	
                <li><Link to="/Home" title="Back to main"><button className="backbtn"><img src="https://i.ibb.co/dkszjYT/boton.png" height="50px" width="50px" alt="x" /></button></Link></li>
                <ul>
                <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/MSxV6K8/Whats-App-Image-2020-10-22-at-1-00-59-PM.jpg" alt="" id="img"></img></div>	
                                    <div class="back">	
                                        <h1>Dilemma</h1>	
                                    <p>Drypoint engraving inspired on Shopenhauer's hedgehog dilemma about relationships</p>	
                                 </div>	
                            </div>	
                    </li>
                    <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/DV5n495/1.jpg" id="imgw"alt=""></img></div>	
                                    <div class="back">	
                                        <h1>Bunny</h1>	
                                    <p>Engraving, two plate linocut </p>	
                                 </div>	
                            </div>	
                    </li>   
                    <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/chvHvxG/pat.jpg" alt="" id="img"></img></div>	
                                    <div class="back">	
                                        <h1>Duck</h1>	
                                    <p>Artistic silkscreen print. The siklscreen was revealed traditionaly with one of my ink draws as positive</p>	
                                 </div>	
                            </div>	
                    </li>
                    <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/G0WBjNS/death.jpg" alt="" id="img"></img></div>	
                                    <div class="back">	
                                        <h1>Death fairy fan-fiction</h1>	
                                    <p>Engraving linocut for one of my top favorite characters: the dead fairy from death fairy tales, by Kiszkiloszki</p>	
                                 </div>	
                            </div>	
                    </li>
                    <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/vQcB6ND/mY302ekQ.jpg" alt="" id="img"></img></div>	
                                    <div class="back">	
                                        <h1>Horse</h1>	
                                    <p>Drypoint engraving</p>	
                                 </div>	
                            </div>	
                    </li>
                    <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/x1VZYMx/3.jpg" alt="" id="imgw"></img></div>	
                                    <div class="back">	
                                        <h1>Possums with anxiety</h1>	
                                    <p>Linocut engraving, for a pattern design</p>	
                                 </div>	
                            </div>	
                        </li>	
                    <li className="card">	
                        <div id="card1" class="card">	
                            <div class="front"><img src="https://i.ibb.co/JcF9FZH/cucar.jpg" alt="" id="img"></img></div>	
                                <div class="back">	
                                    <h2>Cucarachas</h2>	
                                <p>Wood engraving printed on vellum paper</p>	
                                </div>	
                        </div>	
                    </li>	
                    <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/VJKQGk3/GcZk0zWw.jpg" alt="" id="imgw"></img></div>	
                                    <div class="back">	
                                        <h1>Possums with anxiety</h1>	
                                    <p>Linocut engraving, pattern design traditionally printed</p>	
                                 </div>	
                            </div>	
                    </li>
                </ul>


            </div>	

        );	

    }	
};	

export default Engraving;