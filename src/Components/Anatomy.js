import React, {Component} from 'react';	
import '../App.css';	
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';	

class Anatomy extends Component{	
    render(){	
        return(	
            <div className="flip-container">	
                <h1 id="header">Anatomical works</h1>
                <li><Link to="/Home" title="Back to main"><button className="backbtn"><img src="https://i.ibb.co/dkszjYT/boton.png" height="50px" width="50px" alt="x" /></button></Link></li>
                <ul>
                <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/gVGtQsG/Whats-App-Image-2020-05-12-at-3-43-30-PM.jpg" alt="" id="imgw"></img></div>	
                                    <div class="back">	
                                        <h1>Untitled</h1>	
                                    <p>Ink drawing</p>	
                                 </div>	
                            </div>	
                        </li>
                        <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/5r61Lm2/Whats-App-Image-2020-10-20-at-2-26-37-PM-1.jpg" alt="" id="imgw"></img></div>	
                                    <div class="back">	
                                        <h1>Kiwi bird studio</h1>	
                                    <p>Ink drawing, it shows a kiwi bird's unique anatomical proportions. It's muscles, full body and bones</p>	
                                 </div>	
                            </div>	
                        </li>
                        <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/brrzGGR/IMG-20201110-214507-302.jpg" alt="" id="img"></img></div>	
                                    <div class="back">	
                                        <h1>Charcoal studio</h1>	
                                    <p>Charcoal draw inspired on a butoh dance performance by Atsushi Takenouchi, Jinen butoh</p>	
                                 </div>	
                            </div>	
                        </li>
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
                        <p>Digital animation, video </p>	
                    </div>
                 </li>
                        <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/gZmjmBC/Hypnos.jpg" alt="" id="imgw"></img></div>	
                                    <div class="back">	
                                        <h1>Hypnos</h1>	
                                    <p>Pencil drawing</p>	
                                 </div>	
                            </div>	
                        </li>
                        <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/jG1MtPq/Whats-App-Image-2020-10-20-at-2-26-37-PM.jpg" alt="" id="imgw"></img></div>	
                                    <div class="back">	
                                        <h1>Duck</h1>	
                                    <p>Ink drawing</p>	
                                 </div>	
                            </div>	
                        </li>
                        <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/R6hKp8x/image.jpg" alt="" id="img"></img></div>	
                                    <div class="back">	
                                        <h1>Butoh dancer</h1>	
                                    <p>Charcoal drawing</p>	
                                 </div>	
                            </div>	
                        </li>
                        <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/NC8pL98/1.jpg" alt="" id="img"></img></div>	
                                    <div class="back">	
                                        <h1>Kazuo Ohno</h1>	
                                    <p>Charcoal drawing</p>	
                                 </div>	
                            </div>	
                        </li>
                        <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/g67vQDh/123338509-395135291618449-1958785300627447321-n.jpg" alt="" id="imgw"></img></div>	
                                    <div class="back">	
                                        <h1>There are graves in the woods</h1>	
                                    <p>The last ink drawing part of the 2020 inktober series about the Lycaon pictus, an african endangered dog</p>	
                                 </div>	
                            </div>	
                        </li>
                        <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/DV5n495/1.jpg" alt="" id="imgw"></img></div>	
                                    <div class="back">	
                                        <h1>Conejo</h1>	
                                    <p>Pastel drawing</p>	
                                 </div>	
                            </div>	
                        </li>
                        <li className="cardx">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/L8PrwbG/din.jpg" alt="" id="imgw"></img></div>	
                                    <div class="back">	
                                        <h1>Spinosaurus aegyptiacus</h1>	
                                    <p>Watercolor and ink painting</p>	
                                 </div>	
                            </div>	
                        </li>

                        <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/G0WPBFP/16.jpg" alt="" id="img"></img></div>	
                                    <div class="back">	
                                        <h1>Goat</h1>	
                                    <p>Two plate linocut print</p>	
                                 </div>	
                            </div>	
                        </li>
                        <li className="card">	
                            <div id="card1" class="card">	
                                <div class="front"><img src="https://i.ibb.co/xFNKfxW/bbw7WECA.jpg" alt="" id="img"></img></div>	
                                    <div class="back">	
                                        <h1>Saturn devouring his children</h1>	
                                    <p>Pencil draw inspired on a butoh dance performance by Daisuke Yoshimoto</p>	
                                 </div>	
                            </div>	
                        </li>
                        </ul>
            </div>	

        );	

    }	
};	

export default Anatomy;