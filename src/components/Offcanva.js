import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './OffCanva.css';
import { IconContext } from 'react-icons';
import {Button, Form, Image} from 'react-bootstrap'

function Offcanva() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='offcanva'>
          <Link to='#' className='menu-bars'>
          <Button variant="primary" onClick={showSidebar} className="mt-3" >Add new bookmark</Button>
            
          </Link>
        </div>
        <nav className={sidebar ? 'offcanva-menu active' : 'offcanva-menu '}>
          <ul className='offcanva-menu-items' >
            <li className='offcanva-toggle'>
              <Link to='#' className='menu-bars'>
                <a className='title-toggle'>Create a new bookmark</a>
                <AiIcons.AiOutlineClose size={'20px'} className='me-3' onClick={showSidebar} />
              </Link>
            </li>

            <div className="offcanvas-description ps-2">
            <Form>
            <Form.Group className="mb-3 mt-3" controlId="formURL">
              <Form.Label>Insert your URL</Form.Label>
              <Form.Control type="text" placeholder="https://company.com" />
              <Button variant="primary" className="mt-2 w-100" >Load metadata</Button>  
            </Form.Group>
            <a class="nav-link disabled text-center" href="#" tabindex="-1" aria-disabled="true">—————— Preview ——————</a>
            <Image src="" className="w-100" rounded />
            <Form.Group className="mb-3 " controlId="formMetaTitle">
              <Form.Label>Meta Title</Form.Label>
              <Form.Control className="" type="text"  placeholder="Ex. Welcome to my website" />
               
            </Form.Group>

            <Form.Group className="mb-3" controlId="metaDescription">
            <Form.Label>Meta Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button variant="primary" className="mt-1 w-100" >Save bookmark</Button> 
            

          </Form>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Offcanva;