import React, { useState, useEffect } from 'react'
import"../Components/ImageBlockStyle.css"

const Block5 = () => {
    const regex = /(<([^>]+)>)/ig;
    const MainIp = 'http://91.107.217.207'
    const [secondBlock, setSecondBlock] = useState([])

    useEffect(()=>{
       fetch("http://91.107.217.207/jsonapi/block_content/w_full_block/121c2905-1aad-4a35-b001-249f99f464e1?resourceVersion=id%3A4&include=field_image") 
       .then(response => response.json())
       .then(jsonData => setSecondBlock(jsonData.data.field_image.uri))
       .catch(error => console.error(error));
    }, [])

    return (
        <div>
            <div className='Teaser'>
                    <div>
                        <img className='BlockImage' src={`${MainIp}${secondBlock.url}`}></img>
                    </div>
            </div>
        </div>
    )
}

export default Block5