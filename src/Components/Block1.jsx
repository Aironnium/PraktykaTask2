import React, { useEffect, useState } from 'react'
import '../Components/Block1.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Block1 = () => {
    const regex = /(<([^>]+)>)/ig;
    const MainIp = 'http://91.107.217.207'
    const [mainBlock,setMainBlock] = useState([]);
    const [otherBlock, setOtherBlock] = useState([])


    useEffect(()=>{
       fetch("http://91.107.217.207/blog-articles-first?_format=json") 
       .then(response => response.json())
       .then(jsonData => setMainBlock(jsonData))
       .catch(error => console.error(error));
    }, [])
    useEffect(()=>{
        fetch('http://91.107.217.207/blog-articles-second?_format=json')
        .then(response => response.json())
        .then(jsonData => {
            setOtherBlock(jsonData)})
        .catch(error => console.error(error));
    },[])
    return (
        <Container className='FirstTeaser'>
            <Row className='ImportantTeaser'>
                {mainBlock.map(firstBlock =>(
                    <Col>
                        <img className='MainImage' src={`${MainIp}${firstBlock.field_image_1}`} alt={firstBlock.field_image.replace(regex,'')}></img>
                        <p className='MainBlockDate'>{firstBlock.field_date.replace(regex,'')}</p>
                        <h2 className='MainBlockHeader'>{firstBlock.title.replace(regex,'')}</h2>
                        <p className='MainBlockText'>{firstBlock.body.replace(regex,'')}</p>
                    </Col>
                ))}
            </Row>
            <Row className='OtherTeasers'>
                {otherBlock.map(Block=>(
                    <Col className='TeaserColumns'>
                        <img className="OtherImage" src={`${MainIp}${Block.field_image_1}`}></img>
                        <div className='TextContent'>
                            <p className='OtherBlockDate'>{Block.field_date.replace(regex,'')}</p>
                            <h2 className='OtherBlockHeader'>{Block.title.replace(regex,'')} </h2>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Block1