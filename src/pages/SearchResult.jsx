import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Container, Row } from "react-bootstrap";
import "../styles/search_result.css";
import arrow_left from "../styles/images/arrow_left.png";
import arrow_up_down from "../styles/images/arrow_up_down.png";
import transit_icon from "../styles/images/fi_box.png";
import fasilitas_icon from "../styles/images/fi_heart.png";
import harga_icon from "../styles/images/fi_dollar-sign.png";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Loading from "../components/search-result/Loading";
import Empty from "../components/search-result/Empty";
import CardResult from "../components/search-result/CardResult";
import HeaderLogin from "../components/HeaderLogin";

function SearchResult(props) {
  const [tokentoSearchResult, setTokentoSearchResult] = useState(
    props.tokenLogin ? props.tokenLogin : undefined
  );

  useEffect(() => {
    setTokentoSearchResult(props.tokenLogin);
  }, [props]);

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
          <CardResult />
        </Row>
      </Container>
    </>
  );
}

export default SearchResult;
