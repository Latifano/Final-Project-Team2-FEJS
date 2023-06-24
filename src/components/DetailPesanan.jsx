import React from "react";
import { Card, Button } from "react-bootstrap";
import "../styles/history.css";
import { BsGeoAltFill} from "react-icons/bs";

const DetailPesanan = () => {
  return (
    <div>
      <div className="issued mb-3">
        <h6 className="fw-bold">Maret 2023</h6>
        <Card>
          <Card.Header className="border-0">
            <Button>Issued</Button>
          </Card.Header>
          <Card.Body>
            <Card.Text className="d-flex align-items-center justify-content-between">
              <div className="d-flex justify-content-center gap-2">
                <BsGeoAltFill />
                <div>
                  <h6 className="fw-bold">Jakarta</h6>
                  <p className="mb-1">5 Maret 2023</p>
                  <p>19:10</p>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <p className="mb-0">4h 0m</p>
                <hr className="w-400" />
              </div>
              <div className="d-flex justify-content-center gap-2">
                <BsGeoAltFill />
                <div>
                  <h6>Melbourne</h6>
                  <p className="mb-1">5 Maret 2023</p>
                  <p>21:10</p>
                </div>
              </div>
            </Card.Text>
            <hr />
            <Card.Text className="d-flex align-items-center justify-content-between">
              <div>
                <h6 className="fw-bold">Booking Code:</h6>
                <p>6723y2GHK</p>
              </div>
              <div>
                <h6 className="fw-bold">Class:</h6>
                <p>Economy</p>
              </div>
              <h6 className="fw-bold price">IDR 9.850.000</h6>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="unpaid mb-3">
        <Card>
          <Card.Header className="border-0">
            <Button>Unpaid</Button>
          </Card.Header>
          <Card.Body>
            <Card.Text className="d-flex align-items-center justify-content-between">
              <div className="d-flex justify-content-center gap-2">
                <BsGeoAltFill />
                <div>
                  <h6 className="fw-bold">Jakarta</h6>
                  <p className="mb-1">5 Maret 2023</p>
                  <p>19:10</p>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <p className="mb-0">4h 0m</p>
                <hr className="w-400" />
              </div>
              <div className="d-flex justify-content-center gap-2">
                <BsGeoAltFill />
                <div>
                  <h6>Melbourne</h6>
                  <p className="mb-1">5 Maret 2023</p>
                  <p>21:10</p>
                </div>
              </div>
            </Card.Text>
            <hr />
            <Card.Text className="d-flex align-items-center justify-content-between">
              <div>
                <h6 className="fw-bold">Booking Code:</h6>
                <p>6723y2GHK</p>
              </div>
              <div>
                <h6 className="fw-bold">Class:</h6>
                <p>Economy</p>
              </div>
              <h6 className="fw-bold price">IDR 9.850.000</h6>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="cancelled mb-3">
        <h6 className="fw-bold">Februari 2023</h6>
        <Card>
          <Card.Header className="border-0">
            <Button>Cancelled</Button>
          </Card.Header>
          <Card.Body>
            <Card.Text className="d-flex align-items-center justify-content-between">
              <div className="d-flex justify-content-center gap-2">
                <BsGeoAltFill />
                <div>
                  <h6 className="fw-bold">Jakarta</h6>
                  <p className="mb-1">5 Maret 2023</p>
                  <p>19:10</p>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <p className="mb-0">4h 0m</p>
                <hr className="w-400" />
              </div>
              <div className="d-flex justify-content-center gap-2">
                <BsGeoAltFill />
                <div>
                  <h6>Melbourne</h6>
                  <p className="mb-1">5 Maret 2023</p>
                  <p>21:10</p>
                </div>
              </div>
            </Card.Text>
            <hr />
            <Card.Text className="d-flex align-items-center justify-content-between">
              <div>
                <h6 className="fw-bold">Booking Code:</h6>
                <p>6723y2GHK</p>
              </div>
              <div>
                <h6 className="fw-bold">Class:</h6>
                <p>Economy</p>
              </div>
              <div className="price">
                <b>IDR 9.850.000</b>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default DetailPesanan;
