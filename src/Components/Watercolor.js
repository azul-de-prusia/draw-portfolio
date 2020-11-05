import React, {Component} from 'react';	
import '../App.css';	
import { Link } from 'react-router-dom';

class Watercolor extends Component{	
    render(){	
        return(	
            <div className="flip-container">	
                <h1 id="header">Watercolor works</h1>	
                <li><Link to="/Home" title="Back to main"><button className="backbtn"><img src="https://i.ibb.co/dkszjYT/boton.png" height="50px" width="50px" alt="x" /></button></Link></li>
                <ul>
                     <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/89WdDcR/vanitas.jpg" alt="" id="imgw"></img></div>	
                                    <div class="back">	
                                        <h2>Vanitas, detail</h2>	
                                    <p> Watercolor painting, animal vanitas.</p>	
                                 </div>	
                            </div>	
                        </li>	
                        <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/859cHYc/horses.jpg" alt="" id="imgw"></img></div>	
                                    <div class="back">	
                                        <h1>Horses & poppys</h1>	
                                    <p>Watercolor painting and ink, synthetic vanitas with horses skulls and poppy flowers.</p>	
                                 </div>	
                            </div>	
                        </li>	
                        <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/Rz9ywnN/uuYznKQw.jpg" alt="" id="imgw"></img></div>	
                                    <div class="back">	
                                        <h2>Humanity I </h2>	
                                    <p>Watercolor painting about a cow starved to death</p>	
                                 </div>	
                            </div>	
                        </li>	
                        <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/rc8CjVX/sSL1kd0A.jpg" alt="" id="imgw"></img></div>	
                                    <div class="back">	
                                        <h2>Humanity II </h2>	
                                    <p>Watercolor painting about a horse starved to death</p>	
                                 </div>	
                            </div>	
                        </li>	
                        <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/nBKyTRD/23-copia.jpg" id="imgw"alt=""></img></div>	
                                    <div class="back">	
                                        <h2>Learning to fly</h2>	
                                    <p>Watercolor painting of a dead bird that fell to the ground</p>	
                                 </div>	
                            </div>	
                        </li>	
                        <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/KLLHSDN/5-copia.jpg" alt="" id="img"></img></div>	
                                    <div class="back">	
                                        <h1>Deer</h1>	
                                    <p>Watercolor painting and ink drawing. Part of a series about a deer´s life cycle</p>	
                                 </div>	
                            </div>	
                        </li>
                        <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/w7Nwn1Y/Bringer-of-death.jpg" alt="" id="imgw"></img></div>	
                                    <div class="back">	
                                        <h2>The bringer of death</h2>	
                                    <p>Watercolor painting and ink drawing. Part of a series about a deer´s life cycle</p>	
                                 </div>	
                            </div>	
                        </li>	
                        <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/DpZhsT8/lobosbien.jpg" id="img"alt=""></img></div>	
                                    <div class="back">	
                                        <h1>Canis lupus baileyi</h1>	
                                    <p>Watercolor painting about Mexico's endemic endangered fauna</p>	
                                 </div>	
                            </div>	
                        </li>
                        <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/zrLW7V2/Whats-App-Image-2020-05-12-at-3-56-37-PM-3.jpg" id="imgw"alt=""></img></div>	
                                    <div class="back">	
                                        <h1>Velociraptor</h1>	
                                    <p>Watercolor and ink painting</p>	
                                 </div>	
                            </div>	
                        </li>
                        <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/ngy6KWj/122215411-958006261358065-5287580415958145679-n.jpg" id="img"alt=""></img></div>	
                                    <div class="back">	
                                        <h1>Chrysocyon brachyurus</h1>	
                                    <p>Watercolor painting about the maned wolf a unique species of canid with no living relatives</p>	
                                 </div>	
                            </div>	
                        </li>
                </ul>

            </div>	

        );	

    }	
};	

export default Watercolor;