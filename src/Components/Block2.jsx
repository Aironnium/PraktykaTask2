import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import '../Components/SliderStyles.css'

const Block2 = () => {
    const MainIp = 'http://91.107.217.207/'
    const regex = /(<([^>]+)>)/ig;
    const [slider, setSlider] = useState([])

    useEffect(() =>{
        fetch('http://91.107.217.207/design-tutorials-first?_format=json')
        .then(response => response.json())
        .then(jsonData => setSlider(jsonData))
        .catch(error => console.error(error));
    })
    return (
        <div>
            <h2 className='BlockHeader'>Tutorial design</h2>
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
                {slider.map(link => (
                    <SwiperSlide>
                    <img src={`${MainIp}${link.field_image_1}`} className='SliderImage1'></img>
                    <p className='SliderDate'>{link.field_date}</p>
                    <h2 className='SliderTitle'>{link.title_1}</h2>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
  )
}

export default Block2