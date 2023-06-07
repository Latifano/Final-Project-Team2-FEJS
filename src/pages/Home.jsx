import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      <Container>
        <Row>Home</Row>
      </Container>
    </>
  );
}

export default Home;
