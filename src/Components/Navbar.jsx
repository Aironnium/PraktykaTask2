import React, { useState, useEffect, useRef } from 'react';
import "../Components/NavBar.css"
import "../Components/MainStyle.css"
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FaBars, FaTimes} from "react-icons/fa"

function NavbarMenuLinks() {
  const MainIp = 'http://91.107.217.207'
  const regex = /(<([^>]+)>)/ig;
  const navRef = useRef()

    const [menuLogo, setMenuLogo] = useState({});
    const [menuLinks, setMenuLinks] = useState([]);
    const [menuSocialLinks, setMenuSocialLinks] = useState([])
    //Links
    useEffect(() => {
      fetch('http://91.107.217.207/jsonapi/menu_link_content/menu_link_content')
        .then(response => response.json())
        .then(jsonData => setMenuLinks(jsonData.data))
        .catch(error => console.error(error));
    }, []);
    //Logo
    useEffect(() => {
      fetch("http://91.107.217.207/jsonapi/block_content/basic/d6ee7696-ee2d-47f1-a4ba-c6b6a2ac583c?resourceVersion=id%3A1&include=field_image")
      .then(response => response.json())
      .then(jsonData => {
        setMenuLogo(jsonData.data.field_image.uri)})
      .catch(error => console.error(error));
    }, []);
    //Social links with logos
    useEffect(() => {
      fetch('http://91.107.217.207/jsonapi/block_content/social_links/da13c4ff-fea5-48e6-bedb-7ede57c8f29d?resourceVersion=id%3A2&include=field_social_links.field_icon_svg')
        .then(response => response.json())
        .then(jsonData => {

          setMenuSocialLinks(jsonData.data)})
        .catch(error => console.error(error));
    }, []);
 
    const showNavbar = () => {
      navRef.current.classList.toggle(
        "responsive_nav"
      );
    };

/* 
      <Navbar className='NavBar' as="ul"  expand="lg">
        <Container>
          <Navbar.Brand className='NavLogo'>
            <img src={`${MainIp}${menuLogo.url}`} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item className='NavbarItems' as="li">
                {menuLinks.map(link => (
                  <Nav.Link className='NavbarLinks' key={link.drupal_internal__id} to={link.link}>
                    {link.title}
                  </Nav.Link>
                ))}
              </Nav.Item>
              <Nav.Item className='NavbarItems' as="li">
              {Array.isArray(menuSocialLinks) && menuSocialLinks.map(link => (
                <Nav.Link className='NavbarLinks' key={link.drupal_internal__id}>
                  <Image src={`${MainIp}${menuSocialLinks.field_social_links.field_icon_svg.uri.url}`}/>
                </Nav.Link>
                ))}
              </Nav.Item> 
            </Nav>
          </Navbar.Collapse>
        </Container>        
      </Navbar>
*/    
    return (
      <header className='NavBar'>
      <Image className='NavLogo' src={`${MainIp}${menuLogo.url}`}/>
      <nav ref={navRef} className='NavbarItems'>
        {menuLinks.map(link => (
          <Nav.Link className='NavbarLinks' key={link.drupal_internal__id} to={link.link}>
            {link.title}
          </Nav.Link>
        ))}
        <button className='NavButton NavCloseButton' onClick={showNavbar}>
          <FaTimes/>
        </button>
      </nav>  
      <button className='NavButton' onClick={showNavbar}>
        <FaBars/>
      </button>
      </header>
      
  );
}

export default NavbarMenuLinks;