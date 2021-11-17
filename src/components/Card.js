import React from 'react'
import { Col, Card } from 'react-bootstrap'
import { Trash, Link45deg } from 'react-bootstrap-icons';

function Cards(props) {
    
    const test = String(props.bookmark)
    const split = test.split('|') 
    
    const delateBookmark = () => {
        props.delate(props.id)
    }
    
    return (
        
        <Col md={3} className="cards pt-3 pb-3 ">
        
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={split[0]} />
        <Card.Body>
            <Card.Title>{split[1]}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">https://bedu.org</Card.Subtitle> 
            <Card.Text>
            {split[2]}
            </Card.Text>
            <div className="d-flex justify-content-end" >
            <Link45deg className="icon-link me-1" size={22} />
            <Trash className="icon-delate" color="red" size={22} onClick={delateBookmark} />
            </div>
        </Card.Body>
        </Card>
        </Col>
        
    )
}

export default Cards
