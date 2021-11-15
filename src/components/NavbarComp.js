import React from 'react'

import {Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'


function NavbarComp() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Caliche Orozco</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link active="true" href="#home" className="me-3">My bookmarks</Nav.Link>
        <img
        src="/profile.jpg"
        width="30"
        height="30"
        className="d-inline-block align-top rounded-circle"
        alt="React Bootstrap logo"
      />
        <NavDropdown active="true" title="Caliche Orozco" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Inicio</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Cerrar sesión</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default NavbarComp
