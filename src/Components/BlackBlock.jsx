import React, { useState, useEffect } from 'react';
import "../Components/NavBar.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Container, Nav, Navbar, Image } from 'react-bootstrap';

const BlackBlock = () => {
    const MainIp = 'http://91.107.217.207'
    const regex = /(<([^>]+)>)/ig;
    const [blackCountainer, setBlackContainer] = useState([])

    useEffect(() =>{
        fetch('http://91.107.217.207/latest-articles?_format=json')
        .then(response => response.json())
        .then(jsonData => setBlackContainer(jsonData))
        .catch(error => console.error(error));
    }, [])
    return (
        <div className='BlackContainer'>
            <Swiper
               breakpoints={{
                1:{
                    slidesPerView: 1
                },
                576:{
                    slidesPerView: 2
                },
                1024:{
                    slidesPerView: 3
                },
                1440:{
                    slidesPerView: 4
                }
            }}
            className="mySwiper">
        {blackCountainer.map(block => (
            <SwiperSlide>
                <Image className='SliderImage2' src={`${MainIp}${block.field_image_1}`}/>
                <p className='SliderDate DarkTheme'>{`${block.field_date.replace(regex,'')}`}</p>
                <h2 className='SliderTitle DarkTheme'>{`${block.title.replace(regex,'')}`}</h2>
                <p className='SliderText DarkTheme'>{`${block.body.replace(regex,'')}`}</p>
            </SwiperSlide>
        ))}
    </Swiper>
        </div>
    
  )
}

export default BlackBlock