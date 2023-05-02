import React, { useState, useEffect } from 'react';
import "../Components/NavBar.css"
import { Container, Image, Row, Col } from 'react-bootstrap';
import '../Components/StaticBlock.css'

const Block6 = () => {
    const MainIp = 'http://91.107.217.207'
    const regex = /(<([^>]+)>)/ig;
    const [staticBlock, setStaticBlock] = useState([])

    useEffect(() => {
        fetch('http://91.107.217.207/latest-articles?_format=json')
          .then(response => response.json())
          .then(jsonData => setStaticBlock(jsonData))
          .catch(error => console.error(error));
      }, []);
  return (
    <Row className='StaticBlocks'>
        {staticBlock.map(block => (
        <Col className='StaticBlock'>
            <Image className='StaticImage' src={`${MainIp}${block.field_image_1}`}/>
            <p className='Date'>{`${block.field_date.replace(regex,'')}`}</p>
            <h2 className='Header'>{`${block.title.replace(regex,'')}`}</h2>
            <p className='TextContent'>{`${block.body.replace(regex,'')}`}</p>
        </Col>
        ))}
    </Row>
  )
}

export default Block6