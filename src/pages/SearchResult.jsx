import React from "react";
import Header from "../components/Header";
import { Container, Row } from "react-bootstrap";
import "../styles/search_result.css";
import arrow_left from "../styles/images/arrow_left.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function SearchResult() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <div>
            <h6 className="title_searchresult">Pilih Penerbangan</h6>
          </div>
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
          <div className="container_result_date">
            <p>Selasa</p>
            <p>01/03/2023</p>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default SearchResult;
