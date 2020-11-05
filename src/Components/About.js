import React, {Component} from 'react';	
import '../App.css';	

class About extends Component{	
    render(){	
        return(	
            <div className="About">	
                <h1>About me</h1>	
                <ul>	
                    <li className="col">	
                            <p>I am an art enthusiast, and I love all ways of drawing. I have developed as a self-taught illustrator since 	
                                I can remember because of the great passion that drawing means to me. I have a large experience with traditional techniques	
                                and I recently started learn digital media to be able to do animation since it is something that interests me a 	
                                lot because of the wide possibilities it offers and cause I´m a big fan of cartoon series.</p>	
                            <p>I consider myself as a creative person with wide interests, I love art chemistry, history, philosophy, animals, anatomy, and trying	
                                new ways to draw. 	
                     </p>	

                    </li>          	
                    <li className="small">	
                    <p> I would love to collaborate with a company that appreciates creative work as well as visual and audiovisual content.</p>	
                        <p>I have a background as Profesional Restorer and Conservator, I´ve worked during 7 years as technical, researcher and work resident 	
                            restorer in different places of Mexico and I got specialized in paper conservation.</p>	
                            <p>Since 2019 I enter into the digital media first as front-end developer and now as UI / UX designer looking 
                                for new ways to implement design and illustration in usefull products, I've also attempted my first videogames this year in game jams.</p>	

                    </li>	
                <li className="small">	
                    <img src="https://i.ibb.co/Gx6j0z6/giphy.gif" alt="" className="gif"></img>	
                </li>	
             </ul>            	

            </div>	

        );	

    }	
};	

export default About;