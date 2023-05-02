import React, { useState, useEffect } from 'react';
import "../Components/NavBar.css"
import {Image } from 'react-bootstrap';
import '../Components/CommentsContainer.css'

const CommentsBlock = () => {
    const MainIp = 'http://91.107.217.207'
    const regex = /(<([^>]+)>)/ig;
    const [comments, setComments] = useState([])

    useEffect(() =>{
        fetch('http://91.107.217.207/testimonials?_format=json')
        .then(response => response.json())
        .then(jsonData => setComments(jsonData))
        .catch(error => console.error(error));
    }, [])  
    return (
    <div className='CommentContainer'>
        {comments.map(block => (
            <div className='CommentBlock'>
                <Image className='AccountAvatar' src={`${MainIp}${block.field_image_1}`}/>
                <div className='CommentContent'>
                    <p className='Comment'>{`${block.body.replace(regex,'')}`}</p>  
                    <p className='AccountName'>{`${'@'}${block.title.replace(regex,'')}`}</p>
                </div>
              
            </div>
        ))}
    </div>
  )
}

export default CommentsBlock