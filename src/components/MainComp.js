import React from 'react'
import {Row, Col } from 'react-bootstrap'

// El componente espera un children (el offcanva)
function MainComp({children}) {
    return (
        
    <Row className="main d-flex justify-content-center align-items-center">
    <Col md={4} className="  text-center ">
    
    <h1 className="font-weight-bold text-center mb-3">Welcome to Caliche</h1>
    <p>Nulla cupidatat labore voluptate adipisicing veniam elit enim ea qui. Eiusmod magna ex labore ex elit sit laboris occaecat irure magna minim. Occaecat do reprehenderit eiusmod labore qui pariatur consequat commodo. Cillum elit pariatur laboris quis. Ut sint labore ea in sunt culpa velit ipsum in excepteur velit.</p>
    {children}
    </Col>
    </Row>
    
    )
}

export default MainComp
