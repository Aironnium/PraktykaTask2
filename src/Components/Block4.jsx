import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Block4 = () => {
    const MainIp = 'http://91.107.217.207/'
    const regex = /(<([^>]+)>)/ig;
    const [slider, setSlider] = useState([])

    useEffect(() =>{
        fetch('http://91.107.217.207/editors-choice?_format=json')
        .then(response => response.json())
        .then(jsonData => setSlider(jsonData))
        .catch(error => console.error(error));
    })
    return (
        <div>
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
                    <img className='SliderImage2' src={`${MainIp}${link.field_image_1}`}></img>
                    <p className='SliderDate'>{link.field_date}</p>
                    <h2 className='SliderTitle'>{link.title_1.replace(regex,'')}</h2>
                    <p className='SliderText'>{link.body.replace(regex,'')}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Block4