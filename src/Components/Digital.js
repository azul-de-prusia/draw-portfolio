import React, {Component} from 'react';	
import '../App.css';	
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';	

class Digital extends Component{	
    render(){	
        return(	
            <div className="flip-container">	
                <h1 id="header">Digital art</h1>
                <li><Link to="/Home" title="Back to main"><button className="backbtn"><img src="https://i.ibb.co/dkszjYT/boton.png" height="50px" width="50px" alt="x" /></button></Link></li>
            <ul>
                <li className="card">	
                    <div class="front">	
                        <ReactPlayer	
                        url='https://vimeo.com/471178551'	
                        className='react-player'	
                        playing	
                        width='300px'	
                        height='300px'	
                            loop='true'	
                        />	
                     </div>	
                    <div class="back">	
                        <h2>Flesh & bone</h2>	
                        <p>Digital animation frame by frame </p>	
                    </div>
                 </li>
                 <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/ZhrMjbx/galidelineado.jpg" alt="" id="imgw"></img></div>	
                                    <div class="back">	
                                        <h2>Galimatazo´s toonme challenge</h2>	
                                    <p>Digital paint for toonme challenge of my loved dog, Galimatazo</p>	
                                 </div>	
                            </div>	
                        </li>	
                        <li className="card">	
                             <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/NFpdbwq/Whats-App-Image-2020-10-22-at-4-20-07-PM.jpg" alt="" id="img"></img></div>	
                                    <div class="back">	
                                     <h2>Horses pattern</h2>	
                                     <p>Digital pattern</p>	
                                </div>	
                            </div>	
                        </li>
                <li className="card">	
                    <div id="card1" class="card">	
                        <div class="front"><img src="https://i.ibb.co/bWGWPCh/ezgif-com-crop.gif" id="imgw"alt=""></img></div>	
                            <div class="back">	
                                <h1>Beggining of Moth</h1>	
                            <p>Digital animation frame by frame</p>	
                         </div>	
                     </div>	
                 </li> 
               
                <li className="card">	
                    <div id="card1" class="card">	
                        <div class="front"><img src="https://i.ibb.co/RH2Yq3Y/ezgif-com-gif-maker.gif" alt="" id="img"></img></div>	
                            <div class="back">	
                                <h1>Ikigai </h1>	
                            <p>Concept art for Ikigai characters </p>	
                            </div>	
                    </div>	
                </li>
                <li className="card">	
                    <div class="front">	
                        <ReactPlayer	
                        url='https://vimeo.com/471177255'	
                        className='react-player'	
                        playing	
                        width='300px'	
                        height='300px'	
                            loop='true'	
                        />	
                     </div>	
                    <div class="back">	
                        <h2>Ikigai</h2>	
                        <p>Digital illustration for Ikigai videogame, made within a week on Women in Gamex Jam. Concept art, character creation, scenario and assets illustrations</p>	
                    </div>
                 </li>
              
                <li className="card">	
                    <div id="card1" class="card">	
                        <div class="front"><img src="https://i.ibb.co/GQr3tv6/perroso-Final.jpg" alt="" id="img"></img></div>	
                            <div class="back">	
                                <h1>Bearzilla </h1>	
                            <p>Concept art for a giant monster </p>	
                            </div>	
                    </div>	
                </li>
                <li className="card">	
                    <div id="card1" class="card">	
                        <div class="front"><img src="https://i.ibb.co/TLFRFpT/Bearzilla-Final.jpg" alt="" id="img"></img></div>	
                            <div class="back">	
                                <h1>Bearzilla</h1>	
                            <p>Digital drawing of a giant monster attacking a large city</p>	
                            </div>	
                    </div>	
                </li>
                <li className="card">	
                    <div id="card1" class="card">	
                        <div class="front"><img src="https://i.ibb.co/j8c5mZK/sacred-geometrydone.jpg" alt="" id="img"></img></div>	
                            <div class="back">	
                                <h1>Impossible geometry</h1>	
                            <p>Digital drawing inspired by M.C. Escher works</p>	
                            </div>	
                    </div>	
                </li>
              
                <li className="card">	
                    <div id="card1" class="card">	
                        <div class="front"><img src="https://i.ibb.co/F5fpdND/ezgif-com-gif-maker-3.gif" alt="" id="imgw"></img></div>	
                            <div class="back">	
                                <h1>La reconstrucción </h1>	
                            <p>Videogame for game lab jam, I did all illustrations; characters, backgrounds, animations and assets. 
This video game won an honorable mention for the theme of Memory and Conflict.</p>	
                            </div>	
                    </div>	
                </li>
                <li className="card">	
                    <div id="card1" class="card">	
                        <div class="front"><img src="https://i.ibb.co/GvsJ8RC/ezgif-com-gif-maker-4.gif" alt="" id="imgw"></img></div>	
                            <div class="back">	
                                <h1>La reconstrucción </h1>	
                            <p>Videogame for game lab jam, I did all illustrations; characters, backgrounds, animations and assets.
This video game won an honorable mention for the theme of Memory and Conflict.</p>	
                            </div>	
                    </div>	
                </li>
                <li className="card">	
                    <div id="card1" class="card">	
                        <div class="front"><img src="https://i.ibb.co/WfQDJHh/ezgif-com-gif-maker-5.gif" alt="" id="imgw"></img></div>	
                            <div class="back">	
                                <h1>La reconstrucción </h1>	
                            <p>Videogame for game lab jam, I did all illustrations; characters, backgrounds, animations and assets.
This video game won an honorable mention for the theme of Memory and Conflict.</p>	
                            </div>	
                    </div>	
                </li>
                <li className="card">	
                    <div id="card1" class="card">	
                        <div class="front"><img src="https://i.ibb.co/hMDsTMG/17.jpg" alt="" id="img"></img></div>	
                            <div class="back">	
                                <h1>White t-shirt poison</h1>	
                            <p>Digital drawing for a t-shirt design</p>	
                            </div>	
                    </div>	
                </li>	
            </ul>
            </div>	

        );	

    }	
};	

export default Digital;