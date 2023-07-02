import React, { useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../styles/search_result.css";
import { Col } from "react-bootstrap";

import arrow_accordion from "../../styles/images/arrow_accordion.png";
import { useLocation } from "react-router-dom";
import { Button } from "bootstrap";

function CardResult() {
  const loc = useLocation();
  const data = loc.state;
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <>
      <div className="container_accordion">
        {data.map((data) => (
          <Accordion className="box_accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <div className="mt-3">
                  <div className="issued d-flex align-items-center justify-content-between">
                    <h5 className="fw-bold">
                      <img
                        src={data.airline.logo}
                        alt="logo_airplane"
                        className="logo_airplane"
                      />
                      {data.airline.name} - {data.info.seat_class}
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="fw-bold me-3">{data.departure_time}</h6>
                    <img
                      src={arrow_accordion}
                      alt="icon_arrow_accordion"
                      className="me-3"
                    />
                    <h6 className="fw-bold me-5">{data.arrival_time}</h6>
                    <h6 className="text-color">{data.info.price}</h6>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="fw-bold me-4">
                      {data.departure_airport.iata}
                    </h6>
                    <p className="ms-2 me-2">{data.duration}</p>
                    <h6 className="fw-bold ms-4">
                      {data.arrival_airport.iata}
                    </h6>
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
                    <h6 className="fw-bold">{data.departure_time}</h6>
                    <h6 className="text-color">Keberangkatan</h6>
                  </div>
                  <p className="mb-0">{data.date}</p>
                  <p>
                    {data.departure_airport.name} -{" "}
                    {data.departure_airport.city}
                  </p>
                </div>

                <hr />
                <Col xs={1} className="d-flex align-items-center">
                  <Col md="auto">
                    <h6 className="fw-bold">
                      {data.airline.name} - {data.info.seat_class}
                    </h6>
                    <h6 className="fw-bold mb-4">{data.airplane_model}</h6>

                    <h6 className="fw-bold">
                      <img
                        src={data.airline.logo}
                        alt="logo_airplane"
                        className="logo_airplane"
                      />
                      Informasi:
                    </h6>
                    <p>Baggage {data.info.free_baggage} kg</p>
                    <p>Cabin Baggage {data.info.cabin_baggage} kg</p>
                    <p>In Flight Entertainment</p>
                  </Col>
                </Col>

                <hr />

                <div className="div">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="fw-bold">{data.arrival_time}</h6>
                    <h6 className="text-color">Kedatangan</h6>
                  </div>
                  <p className="mb-0">{data.date}</p>
                  <p className="fw-bold">
                    {data.arrival_airport.name} - {data.arrival_airport.city}
                  </p>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </>
  );
}

export default CardResult;
