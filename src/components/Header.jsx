// import Button react js
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

// import form and some navbar library
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// import logo Tiketku
import logo from "../styles/images/logo.png";

// import css
import "../styles/header.css";

import React from "react";

function Header() {
  return (
    <>
      {/* First Line Navbar */}
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Navbar.Brand href="#">
                <div className="logo">
                  <img src={logo} alt="Logo Tiket" />
                </div>
              </Navbar.Brand>

              <Form className="d-flex align-content-center align-items-lg-center">
                <Form.Control
                  type="search"
                  placeholder="Cari di sini ..."
                  className="custom-form me-2"
                  aria-label="Search"
                />
              </Form>
            </Nav>
            <Button className="button-masuk">
              <p className="text-masuk">Masuk</p>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Last Line Navbar */}
    </>
  );
}

export default Header;
