import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col } from 'react-bootstrap'
import NavbarComp from './components/NavbarComp';
import MainComp from './components/MainComp';

function App() {
  return (
    <div className="App">
      <Container fluid>
  <Row>
    <Col >
    <NavbarComp />
    <MainComp />
    
    
    </Col>
  </Row>
</Container>
      
    </div>
  );
}

export default App;
