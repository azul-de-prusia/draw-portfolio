/*
import React, {Component} from 'react';	
import '../App.css';	
import { Link } from 'react-router-dom';
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';



const photos = [
  {
    name: "photo 1",
    url: "https://i.ibb.co/g67vQDh/123338509-395135291618449-1958785300627447321-n.jpg"
  },
  {
    name: "photo 2",
    url: "https://i.ibb.co/MD8L9kB/123529504-706181523584083-6376258729437054561-n.jpg"
  }, 
  {
    name: "photo 3",
    url: "https://i.ibb.co/xMyCSfz/122205942-632731657420283-6343925863743875904-n.jpg"
  },
]




class Lycaon extends Component{	
    render(){	
        const settings = {
          dots: true,
          fade: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          arrows:true,
          slidesToScroll :1,
          className: "slides"
        }
        return(	
            <div className="nw" >	
               <Slider {...settings}>
                (photos.map{(photo) => {
                  return(
                      <div>
                        <img width="100px" src={photo.url}/>
                      </div>
                  )
                }})

               </Slider>
            </div>	

        );	
    }	
};	

export default Lycaon;
*/