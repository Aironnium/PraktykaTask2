import React, { useState, useEffect } from 'react';
import "../Components/NavBar.css"
import { Image } from 'react-bootstrap';
import '../Components/MainStyle.css'

const Banner = () => {
    const MainIp = 'http://91.107.217.207'
    const regex = /(<([^>]+)>)/ig;
    const [bannerImage, setBannerImage] = useState([])

    useEffect(() =>{
        fetch('http://91.107.217.207/jsonapi/block_content/basic/07440139-1de0-44ab-98d8-9a7b437245db?resourceVersion=id%3A5&include=field_image')
        .then(response => response.json())
        .then(jsonData => setBannerImage(jsonData.data.field_image.uri.url))
        .catch(error => console.error(error));
    }, [])  
    return (
    <div>
        <Image className='BannerImage' src={`${MainIp}${bannerImage}`}/>
    </div>
  )
}

export default Banner