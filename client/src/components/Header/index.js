import React from 'react'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import logo from '../../images/logo/logo.png'

import Auth from '../../utils/auth';

function Header(props) {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  }

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
    <Navbar data-testid="navbar-element" className="fixed-top" bg="light" expand="sm">
      <Container data-testid="container-element" style={style.container}>
        <Navbar.Brand data-testid="brand-element" href="/">𝐏𝐉-𝐅𝐀𝐃𝐄𝐒</Navbar.Brand>
        <img data-testid="img-element" src={logo} alt="logo" style={style.image}></img>
        <Navbar.Toggle aria-controls="navbar" />
        <Container fluid="lg" style={style.container}>
          <Navbar.Collapse data-testid="collapse-element" className="justify-content-end" id="navbar">
            <Nav data-testid="nav-element" className="justify-content-around" style={style.nav}>
              <Nav.Link data-testid="home-element" href="/">Home</Nav.Link>
              <Nav.Link data-testid="gallery-element" href="/gallery">Gallery</Nav.Link>
              <Nav.Link data-testid="contact-element" href="/contact">Contact</Nav.Link>
              <Nav.Link data-testid="reservation-element" href="/reservation">Reservation</Nav.Link>
              {Auth.loggedIn() ? (
                // <button className="btn btn-lg btn-light m-2" onClick={logout}>
                // Logout
                // </button>
                <>
                  <Nav.Link data-testid="profile-element" href="/profile">Profile</Nav.Link>
                  <Nav.Link data-testid="logout-element" href="/" onClick={logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link data-testid="login-element" href="/login">Login</Nav.Link>
              )}
              {/* <Nav.Link href="/login">Login</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Container>
    </Navbar>
  )
}
export default Header;