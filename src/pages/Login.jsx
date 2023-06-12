import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../styles/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col className="d-flex align-items-center justify-content-center bg_color display-none">
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <div className="w-75">
            <h3 className="fw-bold">Masuk</h3>
            <Form className="width-form mt-4">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email/No Telepon</Form.Label>
                <Form.Control type="email" placeholder="Contoh: jkwkwwk" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <div class="d-flex justify-content-between">
                  <Form.Label>Password</Form.Label>
                  <Link to="/Lupasandi" className="txt-color fw-bold">
                    Lupasandi
                  </Link>
                </div>

                <Form.Control type="password" placeholder="Masukkan password" />
              </Form.Group>
              <Button type="submit" className="custom-button-lgn text-light w-100">
                Masuk
              </Button>
              <div className="d-flex justify-content-center mt-3">
                <Form.Text>
                  Belum punya Akun?
                  <Link to="/register" className="txt-color">
                    Daftar di sini
                  </Link>
                </Form.Text>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;