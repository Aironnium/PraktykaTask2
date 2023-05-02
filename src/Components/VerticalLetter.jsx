import React, { useState, useEffect } from 'react';
import "../Components/NavBar.css"
import { } from 'react-bootstrap';
import '../Components/VerticalLetter.css'
const VerticalLetter = () => {
    const MainIp = 'http://91.107.217.207'
    const regex = /(<([^>]+)>)/ig;
    const [vertiacalLetter, setVerticalLetter] = useState([])

    useEffect(() =>{
        fetch('http://91.107.217.207/archives?_format=json')
        .then(response => response.json())
        .then(jsonData => setVerticalLetter(jsonData))
        .catch(error => console.error(error));
    }, [])  
    return (
    <div>
        {vertiacalLetter.map(block => (
            <div className='LetterComponent'>
                <p className='LetterDate'>{`${block.field_date.replace(regex,'')}`}</p>
                <h2 className='LetterTitle'>{`${block.title.replace(regex,'')}`}</h2>
            </div>
        ))}
    </div>
  )
}

export default VerticalLetter