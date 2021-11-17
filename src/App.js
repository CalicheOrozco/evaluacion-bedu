import './App.css';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Offcanva from './components/Offcanva';
import {Container, Row, Col } from 'react-bootstrap'
import NavbarComp from './components/NavbarComp';
import MainComp from './components/MainComp';
import Bookmark from './components/Bookmark';
import Cards from './components/Card';

function App() {
  return (
    <div className="App">
      <Container >
  <Row>
    <Col >
    
    <NavbarComp />

    <MainComp>
    <Router>
        <Offcanva />
    </Router>
    </MainComp>
    {/* <Bookmark>
    <Router>
        <Offcanva />
    </Router>
    </Bookmark> */}


    {/* <Cards /> */}
    
    
    </Col>
  </Row>
</Container>
      
    </div>
  );
}

export default App;
