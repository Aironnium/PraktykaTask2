import { BrowserRouter } from "react-router-dom";
import './App.css';
import './Components/MainStyle.css'
import NavbarMenuLinks from "./Components/Navbar.jsx";
import PageTitle from "./Components/PageTitle";
import Block1 from "./Components/Block1";
import Block2 from "./Components/Block2";
import Block3 from "./Components/Block3";
import Block4 from "./Components/Block4";
import Block5 from "./Components/Block5";
import Block6 from "./Components/Block6";
import BlackBlock from "./Components/BlackBlock";
import VerticalBlock from "./Components/VerticalContainer";
import Banner from "./Components/Banner";
import CommentsBlock from "./Components/CommentsContainer";
import { Col, Row } from "react-bootstrap";
import VerticalLetter from "./Components/VerticalLetter";

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <NavbarMenuLinks/>
        <PageTitle/>
        <Block1/>
        <Block2/>
        <Block3/>
        <Block4/>
        <Block5/>
        <Block6/>
        <BlackBlock/>
        <Row className="LowerBlocks">
          <Col className="MainBlock">
            <VerticalBlock/>
          </Col>
          <Col className="OtherBlocks">
            <VerticalLetter/>
            <Banner/>
            <CommentsBlock/>
          </Col>
        </Row>


      </BrowserRouter>
    </div>
  );
}

export default App;
