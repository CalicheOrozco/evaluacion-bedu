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

  // Estados que guarda la id a editar
  const [idEdit, setIdEdit] = useState()
  // Estados que verifican si esta el modo editar
  const [modeEdit, setModeEdit] = useState(false)
  // Estado que verifica si offcavas esta activado
  const [sidebar, setSidebar] = useState(false);
  // Estado que verifica si existen bookmark
  const [validationBookmark, setValidationBookmark] = useState(false)
  // Estado que guarda la lisa de bookmarks
  const [listBookmark, setlistBookmark] = useState([])
  // Estado que guarda el url de la imagen
  const [imgUrl, setimgUrl] = useState([])

  // Funcion que cambia el estado del edit
  const edit = (state) => {
    setModeEdit(state)
    
}

// Funcion que cambia el estado del offcanvas
const editSidebar = (state) => {
  setSidebar(state)

}

// Funcion que cambia el estado del id a editar
  const editId = (id) => {
    setIdEdit(id)
}

// Funcion para actualizar el bookmark
const updateBookmark = (infoCard) => {
  // Se recorre la lista de bookmark
  const listUpdated = listBookmark.map((e,index) => {
    // Si el indice es igual al id a editar
    if(index === idEdit){
      // El elemento va ser igual a la infocard actualizada
      e=infoCard
    }
    return e
  })
  // Se agrega al estado la lista actualizada
  setlistBookmark(listUpdated)

}

  // Función que guarda la información que ira en las cards
  const newBookmark = (infoCard) => {
    // Se agrega la información obtenina en el parametro a la lista de bookmarks
    setlistBookmark([infoCard, ...listBookmark])
    // Se cambia el estado del validador de bookmark a verdadero
    setValidationBookmark(true)
    
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



  return (
    <div className="App">
      <Container >
  <Row>
    <Col >
    
    <NavbarComp />
    {/* Si la validacion de bookmarks es false enseña el componente MainComp, de lo contrario seria Bookmark */}
    {/* Al compoente Offcanva se le pasan las props de putImg, imgUrl, newBookmark */}
    {!validationBookmark ? <MainComp><Router><Offcanva modeEdit={modeEdit}  sidebar={sidebar} editSidebar={editSidebar} edit={edit} editId={editId} updateBookmark={updateBookmark}  putImg={putImg} imgUrl={imgUrl} newBookmark={newBookmark} /></Router></MainComp>
    : <Bookmark><Router><Offcanva modeEdit={modeEdit}  sidebar={sidebar} editSidebar={editSidebar} edit={edit} editId={editId} updateBookmark={updateBookmark}  putImg={putImg} imgUrl={imgUrl} newBookmark={newBookmark}  /></Router></Bookmark>}
    
    

      <div className="row  cardscontainer" >{
        //  Se recorre cada 1 de los componentes dentro del array listBookmark
        listBookmark.map((e, index) =>
        // Se pasan las props para llenar el componente de cards
        <Cards editSidebar={editSidebar}  editId={editId}  edit={edit} bookmark={e} id={index} delate={delate} sidebar={sidebar} />
        )
      }</div>
   
    
    
    </Col>
  </Row>
</Container>
      
    </div>
  );
}

export default App;
