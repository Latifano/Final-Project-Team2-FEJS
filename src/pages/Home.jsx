import React, { useState, useEffect } from "react";
import Header from "../components/Header";

import { Card } from "react-bootstrap";

// import Button react js
import Button from "react-bootstrap/Button";

// import grid react js
import { Container, Row, Col } from "react-bootstrap";

// import banner diskon
import banner_home from "../styles/images/img_banner.png";

// import logo search
import search_logo from "../styles/images/fi_search.png";

import img_destination1 from "../styles/images/img_destination1.png";

// import css
import "../styles/home.css";

function Home() {
  // First Line : Fav Destination

  const [airline, setAirline] = useState([]);

  useEffect(() => {
    fetchAirline();
  }, []);

  const fetchAirline = async () => {
    try {
      const response = await fetch("https://api.aviationstack.com/v1/flights");
      const data = await response.json();
      setAirline(data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  // Last Line : Fav Destination

  return (
    <>
      <Header />
      <Container>
        <Row>
          <div className="banner_home">
            <img src={banner_home} alt="Banner Home" />
          </div>
        </Row>
        <Row>
          <div>
            {/* Title Form Booking */}
            <h6 className="title_form">
              Pilih Jadwal Penerbangan spesial di Tiketku!
            </h6>
          </div>
        </Row>
        <Row>
          <div>
            {/* Title Destinasi */}
            <h6 className="title_destinasi">Destinasi Favorit</h6>

            {/* First Line Kategori Destinasi */}
            <div className="kategori">
              <Button className="button_kategori">
                <img
                  className="icon_masuk"
                  src={search_logo}
                  alt="Icon Search"
                />
                <p className="text-masuk">Semua</p>
              </Button>
              <Button className="button_kategori">
                <img
                  className="icon_masuk"
                  src={search_logo}
                  alt="Icon Search"
                />
                <p className="text-masuk">Asia</p>
              </Button>
              <Button className="button_kategori">
                <img
                  className="icon_masuk"
                  src={search_logo}
                  alt="Icon Search"
                />
                <p className="text-masuk">Asia</p>
              </Button>

              <Button className="button_kategori">
                <img
                  className="icon_masuk"
                  src={search_logo}
                  alt="Icon Search"
                />
                <p className="text-masuk">Amerika</p>
              </Button>
              <Button className="button_kategori">
                <img
                  className="icon_masuk"
                  src={search_logo}
                  alt="Icon Search"
                />
                <p className="text-masuk">Australia</p>
              </Button>
              <Button className="button_kategori">
                <img
                  className="icon_masuk"
                  src={search_logo}
                  alt="Icon Search"
                />
                <p className="text-masuk">Eropa</p>
              </Button>
              <Button className="button_kategori">
                <img
                  className="icon_masuk"
                  src={search_logo}
                  alt="Icon Search"
                />
                <p className="text-masuk">Afrika</p>
              </Button>
            </div>
            {/* last Line Kategori Destinasi */}

            {/* Card Fav Destination */}
            <div className="card-destination">
              <Card className="card-kategori">
                <Card.Img
                  className="img_kategori"
                  variant="top"
                  src={img_destination1}
                />
                <Card.Body>
                  <h6 className="destination">Jakarta -> Bangkok</h6>
                  <h6 className="airline">AirAsia</h6>
                  <h6 className="date">20 - 30 Maret 2023</h6>
                  <h6 className="price">Mulai dari IDR 950.000 </h6>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Home;
