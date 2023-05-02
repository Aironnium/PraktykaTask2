import React, { useEffect, useState } from 'react'
import "./PageTitle.css"

const PageTitle = () => {
    const regex = /(<([^>]+)>)/ig;
    const [title,setTitle] = useState([])

    useEffect(() =>{
        fetch("http://91.107.217.207/jsonapi/node/page")
        .then(response => response.json())
        .then(jsonData => setTitle(jsonData.data))
        .catch(error => console.error(error));
    })
    return (
        <div className='PageTitle'>
            {title.map(link =>(
                <p className='TitleText'>{link.body.value.replace(regex,'')}</p>
            ))} 
        </div>
    )
}

export default PageTitle