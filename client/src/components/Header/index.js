import React from 'react'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import logo from '../../images/logo/logo.png'

function Header(props) {

  const style = {
    container: {
        margin: "0",
        maxWidth: "100%",
        fontColor: "white",
    },
    image: {
        width: "92px",
        height: "75px"
    },
    nav: {
        width: "60%",
        marginRight: "10%",
        fontSize: "20px"
    }
  }

  return (
    <Navbar className="fixed-top" bg="light" expand="sm">
      <Container style={style.container}>
        <Navbar.Brand href="/">𝐏𝐉-𝐅𝐀𝐃𝐄𝐒</Navbar.Brand>
        <img src={logo} alt="logo" style={style.image}></img>
        <Navbar.Toggle aria-controls="navbar" />
        <Container fluid="lg" style={style.container}> 
            <Navbar.Collapse className="justify-content-end" id="navbar">
            <Nav className="justify-content-around" style={style.nav}>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/gallery">Gallery</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/reservation">Reservation</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Container>
    </Navbar>
)
}
export default Header;