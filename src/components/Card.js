import React from 'react'
import { Col, Card } from 'react-bootstrap'
import { Trash, Link45deg } from 'react-bootstrap-icons';

function Cards(props) {
    // Se convierte a string los datos del bookmark obtenido del prop
    const date = String(props.bookmark)
    // Se hace un vector separandolo el string por cada "|"
    const split = date.split('|') 
    // Función que elimina un Bookmark
    const delateBookmark = () => {
        // Se ejecuta la funcion del prop delate pasando el id tambien obtenido de un prop
        props.delate(props.id)
    }
    
    return (
        // Se coloca el tamaño del grid dependiendo la pantalla
        // Si variable offcanvasIs del prop es true, se coloca display none en la clase para ocultar las cards
        <Col sm={12} md={6} lg={4} xxl={3} className={props.offcanvasIs ? 'cards pt-3 pb-3 d-none ' : 'cards pt-3 pb-3'}>
        
        <Card style={{ width: '18rem' }}>
        {/* Se coloca el link de la imagen que esta en la posición 0 del vector */}
        <Card.Img variant="top" src={split[0]} />
        <Card.Body>
            {/* Se coloca el title del bookmark que esta en la posición 1 del vector */}
            <Card.Title>{split[1]}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">https://bedu.org</Card.Subtitle> 
            <Card.Text>
            {/* Se coloca el description del bookmark que esta en la posición 2 del vector */}
            {split[2]}
            </Card.Text>
            <div className="d-flex justify-content-end" >
            <Link45deg className="icon-link me-1" size={22} />
            {/* Aldar click en el icono se ejecuta la funcion delateBookmark */}
            <Trash className="icon-delate" color="red" size={22} onClick={delateBookmark} />
            </div>
        </Card.Body>
        </Card>
        </Col>
        
    )
}

export default Cards
