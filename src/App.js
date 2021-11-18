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
  // Estado que guarda el url de la imagen
  const [imgUrl, setimgUrl] = useState([])


  // Función que guarda la información que ira en las cards
  const newBookmark = (infoCard) => {
    // Se agrega la información obtenina en el parametro a la lista de bookmarks
    setlistBookmark([infoCard, ...listBookmark])
    // Se cambia el estado del validador de bookmark a verdadero
    setValidationBookmark(true)
    
  }

  // Función que guarda si el offcanvas esta abierto
  const offcanvasInfo = (state) => {
    // Se cambia el estado del verificador del offcanvas
    setoffcanvasActivate(state)  
  }
  // Función para eliminar de la lista de bookmarks
  const delate = (id) => {
    // Se realiza una lista nueva sin item en la posicion de id
    const listaFiltrada = listBookmark.filter((e, index) => index !== id )
    // Se actualiza la lista en el estado
    setlistBookmark(listaFiltrada)

  }
  // Función para guardar el link en el estado
  const putImg = (url) => {
    setimgUrl([url])
  }

  // Variable que guarda el estado del canvas
  const stateOffCanvas = offcanvasActivate


  return (
    <div className="App">
      <Container >
  <Row>
    <Col >
    
    <NavbarComp />
    {/* Si la validacion de bookmarks es false enseña el componente MainComp, de lo contrario seria Bookmark */}
    {/* Al compoente Offcanva se le pasan las props de putImg, imgUrl, newBookmark y offCanvasInfo */}
    {!validationBookmark ? <MainComp><Router><Offcanva putImg={putImg} imgUrl={imgUrl} newBookmark={newBookmark} offcanvasInfo={offcanvasInfo} /></Router></MainComp>
    : <Bookmark><Router><Offcanva putImg={putImg} imgUrl={imgUrl} newBookmark={newBookmark} offcanvasInfo={offcanvasInfo} /></Router></Bookmark>}
    
    

      <div className="row  cardscontainer" >{
        //  Se recorre cada 1 de los componentes dentro del array listBookmark
        listBookmark.map((e, index) =>
        // Se pasan las props para llenar el componente de cards
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
