import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import SupportEngine from "../SupportEngine";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-2">
            SignUp
          </NavLink>
          <Nav className="me-auto">
            <NavLink
              to="/login"
              className="text-decoration-none text-light mx-2"
            >
              SignIn
            </NavLink>
            <NavLink to="/" className="text-decoration-none text-light">
              Details
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
