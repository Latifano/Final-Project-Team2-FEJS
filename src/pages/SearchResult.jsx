import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import HeaderLogin from "../components/HeaderLogin";
import "../styles/search_result.css";
import arrow_left from "../styles/images/arrow_left.png";
import arrow_up_down from "../styles/images/arrow_up_down.png";
import transit_icon from "../styles/images/fi_box.png";
import fasilitas_icon from "../styles/images/fi_heart.png";
import harga_icon from "../styles/images/fi_dollar-sign.png";
import arrow_accordion from "../styles/images/arrow_accordion.png";

import Button from "react-bootstrap/Button";
import Loading from "../components/search-result/Loading";
import Empty from "../components/search-result/Empty";
// import CardResult from "../components/search-result/CardResult";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function SearchResult(props) {
  const [tokentoSearchResult, setTokentoSearchResult] = useState(
    props.tokenLogin ? props.tokenLogin : undefined
  );

  useEffect(() => {
    setTokentoSearchResult(props.tokenLogin);
  }, [props]);

  const loc = useLocation();
  const data = loc.state;
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <>
      {tokentoSearchResult === undefined || tokentoSearchResult === null ? (
        <Header />
      ) : (
        <HeaderLogin />
      )}

      <Container>
        <Row>
          {/* Title */}
          <div>
            <h6 className="title_searchresult">Pilih Penerbangan</h6>
          </div>

          {/* Schedule selected */}
          <div>
            <div className="container_result_data_selected">
              <img
                className="icon_arrow_left"
                src={arrow_left}
                alt="Arrow Icon"
              />
              <p className="text_result_data_selected">
                JKT - MLB - 2 Penumpang - Economy
              </p>

              <Button variant="success" className="button_ubah_pencarian">
                <p className="text_button_ubah_pencarian">Ubah Pencarian</p>
              </Button>
            </div>
          </div>

          {/* Day selected */}
          <div>
            <div className="container_result_date">
              <div className="wrapper">
                <p className="hari">Selasa</p>
                <p className="tanggal">01/03/2023</p>
              </div>
              <div className="wrapper">
                <p className="hari">Rabu</p>
                <p className="tanggal">02/03/2023</p>
              </div>
              <div className="wrapper">
                <p className="hari">Kamis</p>
                <p className="tanggal">03/03/2023</p>
              </div>
              <div className="wrapper">
                <p className="hari">Jumat</p>
                <p className="tanggal">04/03/2023</p>
              </div>
              <div className="wrapper">
                <p className="hari">Sabtu</p>
                <p className="tanggal">05/03/2023</p>
              </div>
              <div className="wrapper">
                <p className="hari">Minggu</p>
                <p className="tanggal">06/03/2023</p>
              </div>
              <div className="wrapper">
                <p className="hari">Senin</p>
                <p className="tanggal">07/03/2023</p>
              </div>
              <div className="wrapper">
                <p className="hari">Selasa</p>
                <p className="tanggal">08/03/2023</p>
              </div>
            </div>
          </div>

          {/* Filter */}
          <div>
            <div className="box_filter">
              <Button className="button_filter">
                <img
                  className="icon_arrow_updown"
                  src={arrow_up_down}
                  alt="Icon Arrow Up Down"
                />
                <p className="text_filter">Termurah</p>
              </Button>
            </div>
          </div>

          {/* Menu Filter */}
          <div>
            <div className="box_menu_filter">
              <h5>Filter</h5>
              <p>
                <img
                  className="icon_transit"
                  src={transit_icon}
                  alt="Icon Transit"
                />
                Transit
              </p>
              <p>
                <img
                  className="icon_fasilitas"
                  src={fasilitas_icon}
                  alt="Icon Fasilitas"
                />{" "}
                Fasilitas
              </p>
              <p>
                <img className="icon_harga" src={harga_icon} alt="IconHarga" />
                Harga
              </p>
            </div>
          </div>

          {/* <Loading /> */}
          {/* <Empty /> */}
          {/* Accordion Result */}
          <div className="container_accordion">
            <Accordion className="box_accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <div className="mt-3">
                    <div className="issued d-flex align-items-center justify-content-between">
                      <h5 className="fw-bold">Jet Air - Economy</h5>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="fw-bold me-3">19:10</h6>
                      <img
                        src={arrow_accordion}
                        alt="icon_arrow_accordion"
                        className="me-3"
                      />
                      <h6 className="fw-bold me-5">21:00</h6>
                      <h6 className="text-color">IDR 4.950.000</h6>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="fw-bold me-4">JKT</h6>
                      <p className="ms-2 me-2">1h 50m</p>
                      <h6 className="fw-bold ms-4">MLB</h6>
                      <Button
                        type="submit"
                        className="custom-button-lgn text-light w-10"
                      >
                        Pesan
                      </Button>
                    </div>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="mt-3">
                    <div className="issued d-flex align-items-center justify-content-between">
                      <h5 className="fw-bold">Detail Pesanan</h5>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="fw-bold">19:10</h6>
                      <h6 className="text-color">Keberangkatan</h6>
                    </div>
                    <p className="mb-0">5 Maret 2023</p>
                    <p>Soekarno Hatta - Terminal 1A Domestik</p>
                  </div>

                  <hr />
                  <Col xs={1} className="d-flex align-items-center">
                    <Col md="auto">
                      <h6 className="fw-bold">Jet Air - Economy</h6>
                      <h6 className="fw-bold mb-4">JT - 203</h6>
                      <h6 className="fw-bold">Informasi:</h6>
                      <p>Baggage</p>
                      <p>Cabin Baggage</p>
                      <p>In Flight Entertainment</p>
                    </Col>
                  </Col>

                  <hr />

                  <div className="div">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6>21:10</h6>
                      <h6 className="text-color">Kedatangan</h6>
                    </div>
                    <p className="mb-0">5 Maret 2023</p>
                    <p className="fw-bold">Melbourne International Airport</p>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default SearchResult;
