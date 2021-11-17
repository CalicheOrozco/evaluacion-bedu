import React from 'react'
import {Row, Col } from 'react-bootstrap'


function Bookmark({children}) {
    return (
        <Row>
        <Col md={4} className="bookmarks text-center d-inline-flex justify-content-between pt-5 ">
        
        <h3 className="font-weight-bold text-center fw-bold mb-3">My bookmarks</h3>
        
        {children}
        </Col>
        </Row>
    )
}

export default Bookmark
