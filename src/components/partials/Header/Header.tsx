import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
      <Navbar>
        <Container>
          <Nav className='w-100 d-flex justify-content-center gap-3'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/create-contact">Create Contact</NavLink>
          </Nav>
        </Container>
      </Navbar>
  );
};

export default Header
