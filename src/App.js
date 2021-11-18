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

  // Estado que verifica si offcavas esta activado
  const [offcanvasActivate, setoffcanvasActivate] = useState(false)
  // Estado que verifica si existen bookmark
  const [validationBookmark, setValidationBookmark] = useState(false)
  // Estado que guarda la lisa de bookmarks
  const [listBookmark, setlistBookmark] = useState([])
  // Funcion que guarda la información que ira en las cards
  const newBookmark = (infoCard) => {
    // Se agrega la información obtenina en el parametro a la lista de bookmarks
    setlistBookmark([infoCard, ...listBookmark])
    // Se cambia el estado del validador de bookmark a verdadero
    setValidationBookmark(true)
    
  }

  // Funcion que guarda si el offcanvas esta abierto
  const offcanvasInfo = (state) => {
    
    // Se cambia el estado del verificador del offcanvas
    setoffcanvasActivate(state)
    
    
  }

  const delate = (id) => {
    const listaFiltrada = listBookmark.filter((e, index) => index !== id )
    setlistBookmark(listaFiltrada)

  }

  const [imgUrl, setimgUrl] = useState([])

  const putImg = (url) => {
    setimgUrl([url])

  }
  const stateOffCanvas = offcanvasActivate
  console.log(stateOffCanvas)
  return (
    <div className="App">
      <Container >
  <Row>
    <Col >
    
    <NavbarComp />
    {!validationBookmark ? <MainComp><Router><Offcanva putImg={putImg} imgUrl={imgUrl} newBookmark={newBookmark} offcanvasInfo={offcanvasInfo} /></Router></MainComp>
    : <Bookmark><Router><Offcanva putImg={putImg} imgUrl={imgUrl} newBookmark={newBookmark} offcanvasInfo={offcanvasInfo} /></Router></Bookmark>}
    
    

      <div className="row  cardscontainer" >{
        listBookmark.map((e, index) =>
        
        <Cards bookmark={e} id={index} delate={delate} offcanvasIs={stateOffCanvas} />
        )
      }</div>
   
    
    
    </Col>
  </Row>
</Container>
      
    </div>
  );
}

export default App;
