import React from "react";
import { Button, Card, Col, Container, ListGroup, Row, Form} from "react-bootstrap";
import { FiArrowLeft, FiEdit3, FiLogOut, FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../styles/account.css";

const Account = () => {
  const linkStyle = {
    color: "var(--primary-color)",
    textDecoration: "none",
  };

  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col md={{ span: 10, offset: 1 }}>
            <h4>Akun</h4>
          </Col>
        </Row>
        <Row>
          <Col
            className="mt-3 rounded"
            md={{ span: 10, offset: 1 }}
          >
            <Button className="back-button p-3">
              <FiArrowLeft className="me-2" /> Beranda
            </Button>
          </Col>
        </Row>
      </Container>

      <div className="shadow-sm border-bottom pb-4" />

      <Container className="mt-5">
        <Row>
          <Col md={{ span: 4, offset: 1 }}>
            <ListGroup variant="flush">
              <ListGroup.Item action className="pb-3">
                <Link to={"/edit-profile"} style={linkStyle}>
                  <FiEdit3 className="link-style me-3" />
                  Ubah Profile
                </Link>
              </ListGroup.Item>
              <ListGroup.Item action className="mt-4 pb-3">
                <Link to={"/account-settings"} style={linkStyle}>
                  <FiSettings className="link-style me-3" />
                  Pengaturan Akun
                </Link>
              </ListGroup.Item>
              <ListGroup.Item action className="mt-4 border-bottom pb-3">
                <Link to={"/logout"} style={linkStyle}>
                  <FiLogOut className="link-style me-3" />
                  Keluar
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={{ span: 5, offset: 1 }}>
            <Card>
              <Card.Body className="p-4">
                <h5>Ubah Data Profil</h5>
                <Row>
                  <Col className="personal-info rounded-top p-3 mt-3">
                    Data Diri
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Form>
                    <Form.Group className="mb-3" controlId="formFullName">
                      <Form.Label>Nama Lengkap</Form.Label>
                      <Form.Control type="text" placeholder="John Doe" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPhoneNumber">
                      <Form.Label>Nomor Telepon</Form.Label>
                      <Form.Control type="text" placeholder="+62" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="johndoe@example.com"
                      />
                    </Form.Group>
                    <div className="text-center">
                      <Button className="save-button px-4 py-2" type="submit">
                        Simpan
                      </Button>
                    </div>
                  </Form>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Account;
