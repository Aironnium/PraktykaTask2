import React, { useState, useEffect } from 'react';
import "../Components/NavBar.css"
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import '../Components/VerticalContainer.css'
const VerticalBlock = () => {
    const MainIp = 'http://91.107.217.207'
    const regex = /(<([^>]+)>)/ig;
    const [vertiacalCountainer, setVerticalContainer] = useState([])

    useEffect(() =>{
        fetch('http://91.107.217.207/latest-articles?_format=json')
        .then(response => response.json())
        .then(jsonData => setVerticalContainer(jsonData))
        .catch(error => console.error(error));
    }, [])  
    return (
    <div>
        {vertiacalCountainer.map(block => (
            <div className='OneContainer'>
                <Image className='ImageBlock' src={`${MainIp}${block.field_image_1}`}/>
                <p className='DateVerticalContainer'>{`${block.field_date.replace(regex,'')}`}</p>
                <h2 className='Title'>{`${block.title.replace(regex,'')}`}</h2>
                <p className='TextBlock'>{`${block.body.replace(regex,'')}`}</p>
            </div>
        ))}
    </div>
  )
}

export default VerticalBlock