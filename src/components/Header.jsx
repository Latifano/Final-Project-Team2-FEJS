import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

import React from "react";

function Header() {
  return (
    <>
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
                <Image src="../styles/images/logo.png" />
                <style>backgroundImage:`url(${})`</style>
              </Navbar.Brand>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Nav>
            <Button variant="outline-success">Masuk</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
