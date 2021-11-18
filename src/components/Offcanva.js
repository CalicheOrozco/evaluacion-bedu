import React, { useState } from 'react';

import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './OffCanva.css';
import { IconContext } from 'react-icons';
import {Button, Form, Image} from 'react-bootstrap'


function Offcanva(props) {
  const [sidebar, setSidebar] = useState(false);
  const [inputImgMeta, setInputImgMeta] = useState("")
  const [inputTextMetaTitle, setInputTextMetaTitle] = useState("")
  const [inputTextMetaDescription, setInputTextMetaDescription] = useState("")
  const [validation, setValidation] = useState(true)

    
    // Funcion que controla los datos del form ImgControlImg
    const controlImgMeta = (event) =>{
      // actualiza el estado cada vez que se actualiza el input
      setInputImgMeta(event.target.value)
  }
    // Funcion que controla los datos del form del title
    const controlFormMetaTitle = (event) =>{
      // actualiza el estado cada vez que se actualiza el input
      setInputTextMetaTitle(event.target.value)     
  }
  // Funcion que controla los datos del form del description
  const controlFormMetaDescription = (event) =>{
    // Funcion que controla los datos del form del title
    setInputTextMetaDescription(event.target.value)
    
}

// Funcion que  guarda en el estado el link de la imagen
const submitImg = (event) => {
  event.preventDefault()
  // Si el campo no esta vacio
  if (inputImgMeta.trim() !==""){
    // Ejecuta la funcion putImg que se paso como prop
      props.putImg(inputImgMeta)
      // Se pasa  la validación a true
      setValidation(true)
  } else {
      // Si no se pasa la validacion a falso
      setValidation(false)
      // Se envia una alerta informando el error
      alert('Es necesario colocar el link de una imagen')
      console.log(validation) 
  }
  
}
// Función que guarda todo el bookmark
const submitBookmark = (event) => {
  event.preventDefault()
  // Si ningun campo esta vacio
  if (inputTextMetaTitle.trim() !=="" && inputTextMetaDescription.trim() !==""  ){
    // Se cierrael offcanvas
      setSidebar(false)
      // Se guarda toda la información en una variable y se separa los datos con un "|"
      const infoCard = inputImgMeta +"|"+ inputTextMetaTitle + "|"+ inputTextMetaDescription
      // Se ejecuta la funcion newbookmark para guardar los datos obtenidos
      props.newBookmark(infoCard)
      // Se cambia la validación a true
      setValidation(true)
      
  } else {
    // De lo contrario se coloca la validación en false
      setValidation(false)
      // Se envia una alerta con el error
      alert('Es necesario que llenes todos los campos')

  }
  
}
  // Función que muestra/quita el offcanva
  const showSidebar = () => 
  // Se coloca el estado al contrario del que se encuentre
  setSidebar(!sidebar) 
  // Se ejecuta la funcion que informa del estado del offcanvas
  props.offcanvasInfo(sidebar)

  return (
    <>
      {/* se coloca el icono y el color del icono */}
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='offcanva'>
          <Link to='#' className='menu-bars'>
          <Button variant="primary" onClick={showSidebar} className="mt-3" >Add new bookmark</Button>
            
          </Link>
        </div>
        {/* Si el estado del offcanvas es true se añade la clase active de lo contrario se elimina */}
        <nav className={sidebar ? 'offcanva-menu active ' : 'offcanva-menu '}>
          <ul className='offcanva-menu-items' >
            <li className='offcanva-toggle bg-primary'>
              <Link to='#' className='menu-bars'>
                <span className='title-toggle'>Create a new bookmark</span>
                <AiIcons.AiOutlineClose size={'20px'} className='me-3' onClick={showSidebar} />
              </Link>
            </li>

            <div className="offcanvas-description ps-2">
            <Form>
            <Form.Group className="mb-3 mt-3" controlId="formURL">
              <Form.Label>Insert your URL</Form.Label>
              <Form.Control type="text" placeholder="https://company.com" value={inputImgMeta} onChange={controlImgMeta} />
              <Button variant="primary" className="mt-2 w-100" onClick={submitImg} >Load metadata</Button>  
            </Form.Group>
            <span className="nav-link disabled text-center" href="#" tabIndex="-1" aria-disabled="true">—— Preview ——</span>
            <Image src={props.imgUrl} className="w-100" rounded />
            <Form.Group className="mb-3 " controlId="formMetaTitle">
              <Form.Label>Meta Title</Form.Label>
              <Form.Control className="" type="text"  placeholder="Ex. Welcome to my website" value={inputTextMetaTitle} onChange={controlFormMetaTitle} />
               
            </Form.Group>

            <Form.Group className="mb-3" controlId="metaDescription" value={inputTextMetaDescription} onChange={controlFormMetaDescription}>
            <Form.Label>Meta Description</Form.Label>
            <Form.Control as="textarea" rows={3}  />
          </Form.Group>

          <Button variant="primary" className="mt-1 w-100" onClick={submitBookmark} >Save bookmark</Button> 
            

          </Form>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Offcanva;