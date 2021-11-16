import React from 'react'
import {Row, Col, Button, Card } from 'react-bootstrap'
import { Trash, Link45deg } from 'react-bootstrap-icons';

function Cards() {
    return (
        <Row>
        <Col md={4} className="cards pt-5 ">
        
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://assets.bedu.org/images/developer-image.jpeg?fit=min&w=328" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">https://bedu.org</Card.Subtitle> 
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <div className="d-flex justify-content-end" >
            <Link45deg className="icon-link me-1" size={22} />
            <Trash className="icon-delate" color="red" size={22} />
            </div>
        </Card.Body>
        </Card>
        </Col>
        </Row>
    )
}

export default Cards
