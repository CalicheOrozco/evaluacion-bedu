import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Offcanva from './components/Offcanva';
import {Container, Row, Col } from 'react-bootstrap'
import NavbarComp from './components/NavbarComp';
import MainComp from './components/MainComp';
import Bookmark from './components/Bookmark';
import Cards from './components/Card';


function App() {


  const [validationBookmark, setValidationBookmark] = useState(false)

  const [listBookmark, setlistBookmark] = useState([])

  const newBookmark = (infoCard) => {
    
    
    
    console.log(listBookmark.length)
    setlistBookmark([infoCard, ...listBookmark])
    console.log(listBookmark)
    setValidationBookmark(true)
    
  }

  const delate = (id) => {
    const listaFiltrada = listBookmark.filter((e, index) => index !== id )
    setlistBookmark(listaFiltrada)

  }

  const [imgUrl, setimgUrl] = useState([])

  const putImg = (url) => {
    setimgUrl([url])

  }
  return (
    <div className="App">
      <Container >
  <Row>
    <Col >
    
    <NavbarComp />
    {!validationBookmark ? <MainComp><Router><Offcanva putImg={putImg} imgUrl={imgUrl} newBookmark={newBookmark} /></Router></MainComp>
    : <Bookmark><Router><Offcanva putImg={putImg} imgUrl={imgUrl} newBookmark={newBookmark} /></Router></Bookmark>}
    
    

      <div className="row  cardscontainer" >{
        listBookmark.map((e, index) =>
        
        <Cards bookmark={e} id={index} delate={delate} />
        )
      }</div>
   
    
    
    </Col>
  </Row>
</Container>
      
    </div>
  );
}

export default App;
