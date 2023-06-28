import React from "react";
import { Link, useLocation } from "react-router-dom";
import Datapemesanan from "../components/Datapemesanan";
import Datapenumpang from "../components/Datapenumpang";
// import Matahari from "../styles/images/matahari.png";
import "../styles/checkout.css";
import {
  Alert,
  Breadcrumb,
  Button,
  Col,
  Container,
  Row,
} from "react-bootstrap";

const Checkout = () => {
  const loc = useLocation();
  // From Search Result
  const dataPostToGetDetail = loc.state;
  // useEffect(() => {
  //   for (data.price.adult_count; data.price.adult_count > 0; data.price.adult_count--) {
  //     console.log("komponen data looping ke ",data.price.adult_count)
  //   }
  // }, []);
  return (
    <>
      <Container className="bg warning mt-5">
        <Row>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item active>
                <Link
                  className="fw-bold"
                  style={{ textDecoration: "none", color: "#7126B5" }}
                >
                  Isi Data Diri
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active>
                <Link
                  to="/Payment"
                  className="fw-bold"
                  style={{ textDecoration: "none", color: "#7126B5" }}
                >
                  Bayar
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active>
                <Link
                  className="fw-bold"
                  style={{ textDecoration: "none", color: "#7126B5" }}
                >
                  Selesai
                </Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Alert
            className="text-center text-light border-0"
            style={{ background: "#FF0000", borderRadius: "10px" }}
          >
            Selesaikan dalam 00:15:00
          </Alert>
        </Row>
        <Row className="gap-4">
          <Col>
            <Row className="border py-4 px-4">
              <Datapemesanan />
            </Row>
            <Row className="border py-4 px-4 mt-3">
              <Datapenumpang />
            </Row>
            <Button type="submit" className="w-100 my-3 button-save">
              Simpan
            </Button>
          </Col>
          <Col>
            <div className="mt-3">
              <h5 className="fw-bold">Detail Penerbangan</h5>
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="fw-bold">
                  {dataPostToGetDetail.departure.departure_time}
                </h5>
                <h6 className="fw-bold" style={{ color: "#7126B5" }}>
                  Keberangkatan
                </h6>
              </div>
              <p className="mb-0">{dataPostToGetDetail.departure.date}</p>
              <p>{dataPostToGetDetail.departure.airport_name}</p>
            </div>

            <hr />

            <Row className="d-flex align-items-center">
              <Col md={1}>
                {/* Logo maskapai */}
                {/* <img src={Matahari} alt="" /> */}
              </Col>
              <Col md="auto">
                <h6 className="fw-bold">
                  {dataPostToGetDetail.info.airline_name} -{" "}
                  {dataPostToGetDetail.info.seat_class}
                </h6>
                <h6 className="fw-bold mb-4">
                  {dataPostToGetDetail.info.airplane_model}
                </h6>
                <h6 className="fw-bold">Informasi:</h6>
                <p className="mb-0">
                  Baggage {dataPostToGetDetail.info.free_baggage} kg
                </p>
                <p className="mb-0">
                  Cabin baggage {dataPostToGetDetail.info.cabin_baggage} kg
                </p>
                <p>In Flight Entertainment</p>
              </Col>
            </Row>

            <hr />

            <div>
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="fw-bold">
                  {dataPostToGetDetail.arrival.arrival_time}
                </h5>
                <h6 className="fw-bold" style={{ color: "#7126B5" }}>
                  Kedatangan
                </h6>
              </div>
              <p className="mb-0">{dataPostToGetDetail.arrival.date}</p>
              <p className="fw-bold">
                {dataPostToGetDetail.arrival.airport_name}
              </p>
            </div>

            <hr />

            <div>
              <h5 className="fw-bold">Rincian Harga</h5>
              <div className="d-flex justify-content-between align-items-center">
                <p>{dataPostToGetDetail.price.adult_count} Adults</p>
                <p>IDR {dataPostToGetDetail.price.adult_price}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p>{dataPostToGetDetail.price.child_count} Baby</p>
                <p>IDR {dataPostToGetDetail.price.child_price}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p>{dataPostToGetDetail.price.infant_count} Baby</p>
                <p>IDR {dataPostToGetDetail.price.infant_price}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p>Tax</p>
                <p>IDR {dataPostToGetDetail.price.tax}</p>
              </div>
            </div>

            <hr />

            <div className="d-flex justify-content-between align-items-center">
              <h5 className="fw-bold txt-primary">Total</h5>
              <h5 className="fw-bold" style={{ color: "#7126B5" }}>
                IDR {dataPostToGetDetail.price.total_price}
              </h5>
            </div>
            <br />
            <Link to="/Payment" className="w-100 pay">
              Lanjut Bayar
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Checkout;
