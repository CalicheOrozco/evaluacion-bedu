import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
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
    <Bookmark />
    <Cards />
    
    
    </Col>
  </Row>
</Container>
      
    </div>
  );
}

export default App;
