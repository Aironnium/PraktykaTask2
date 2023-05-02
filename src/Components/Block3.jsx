import React, { useEffect, useState }from 'react'
import '../Components/ImageBlockStyle.css'

const Block3 = () => {
    const regex = /(<([^>]+)>)/ig;
    const MainIp = 'http://91.107.217.207/'
    const [staticBlock, setStaticBlock] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
//<img src={`${MainIp}${block.field_image.uri.url}`}></img>
    useEffect(()=>{
        fetch("http://91.107.217.207/jsonapi/block_content/w_full_block/cf972415-4ba6-4d47-ae43-11798f4b8e2a?resourceVersion=id%3A3&include=field_image") 
        .then(response => response.json())
        .then(data => setStaticBlock(data.data.field_image.uri))
        .catch(error => {
            setError(error);
            setLoading(false);
          });
     }, [])

      
     if(error){
        return <div> Error: {error.message}</div>;
     }

  return (
    <div>

        <img src={`${MainIp}${staticBlock.url}`} className='BlockImage'/>

    </div>
  )
}

export default Block3