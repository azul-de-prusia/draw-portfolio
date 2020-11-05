import React, {Component} from 'react';	
import '../App.css';	
import { Link } from 'react-router-dom';

class Ink extends Component{	
    render(){	
        return(	
            <div className="flip-container">	
                <h1 id="header">Ink works</h1>	
                <li><Link to="/Home" title="Back to main"><button className="backbtn"><img src="https://i.ibb.co/dkszjYT/boton.png" height="50px" width="50px" alt="x" /></button></Link></li>
                <ul>
                     <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/74qSTDy/24.jpg" alt="" id="img"></img></div>	
                                    <div class="back">	
                                        <h1>Gatonejo</h1>	
                                    <p>Ink drawing of an original character, the gatonejo.</p>	
                                 </div>	
                            </div>	
                        </li>	
                        <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/sWf08ZJ/chanchitos.jpg" alt="" id="imgw"></img></div>	
                                    <div class="back">	
                                        <h1>Sus scrofa puppies, wild boars, jabalí</h1>	
                                    <p>Ink drawing with inkbrush</p>	
                                 </div>	
                            </div>	
                        </li>	
                        <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/CsVqtcc/6-copia.jpg" alt="" id="img"></img></div>	
                                    <div class="back">	
                                        <h1>Carpenter bee, Xylocopa</h1>	
                                    <p>Ink drawing part of the inktober insect themed series 2019</p>	
                                 </div>	
                            </div>	
                        </li>	
         
                        <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/2hrZtwT/moth.jpg" id="img"alt=""></img></div>	
                                    <div class="back">	
                                       <h1>Attacus altas, Ornithoptera alexandrae & Thysania agrippinade</h1>	
                                    <p>Ink drawing. The biggest moth and the two biggest  diurnal and nightly butterflies. The last work for the inktober insect themed series 2019</p>	
                                </div>	
                            </div>	
                        </li>	
                        <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/x7cqR72/pWCtlEvw.jpg" id="imgw"alt=""></img></div>	
                                    <div class="back">	
                                       <h1>The last Ceratotherium simum</h1>	
                                    <p>In 2018 the last white rhino male died in captivity after many years of poaching to get their horns </p>	
                                </div>	
                            </div>	
                        </li>	
                        <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/jR1wC7M/peces.jpg" alt="" id="img"></img></div>	
                                    <div class="back">	
                                        <h1>Fishes</h1>	
                                    <p>Ink drawing with inkbrush</p>	
                                 </div>	
                            </div>	
                        </li> 
                        <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/MD8L9kB/123529504-706181523584083-6376258729437054561-n.jpg" id="imgw"alt=""></img></div>	
                                    <div class="back">	
                                       <h1>What's that nois...</h1>	
                                    <p>IInk drawing part of the 2020 inktober series about the Lycaon pictus, an african endangered dog</p>	
                                </div>	
                            </div>	
                        </li>	
                        <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/xMyCSfz/122205942-632731657420283-6343925863743875904-n.jpg" id="imgw"alt=""></img></div>	
                                    <div class="back">	
                                       <h1>Night light?</h1>	
                                    <p>Ink drawing part of the 2020 inktober series about the Lycaon pictus, an african endangered dog </p>	
                                </div>	
                            </div>	
                        </li>	
                        <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/xsbZHSx/libel.jpg" alt=""id="imgw"></img></div>	
                                    <div class="back">	
                                        <h1>Dragonfly composition</h1>	
                                    <p>Ink drawing, the first job of the inktober challenge of 2019, insect themed</p>	
                                 </div>	
                            </div>	
                        </li>
                        <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/nMvWP4X/orgua.jpg" alt="" id="img"></img></div>	
                                    <div class="back">	
                                        <h2>Manduca quinquemaculata</h2>	
                                    <p>Caterpillar or tomato hornworm, ink drawing part of the inktober insect themed series 2019</p>	
                                 </div>	
                            </div>	
                        </li>	
                        <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/88KRxcK/123505772-1654240478070133-6172452251816196001-n.jpg" alt="" id="img"></img></div>	
                                    <div class="back">	
                                        <h2>Sailor moon redraw challenge</h2>	
                                    <p>This is my ink version for the Sailor Moon redraw challenge</p>	
                                 </div>	
                            </div>	
                        </li>	

                </ul>
            </div>	

        );	

    }	
};	

export default Ink;