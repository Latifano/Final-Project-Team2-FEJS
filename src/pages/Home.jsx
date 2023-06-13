import React, { useState, useEffect } from "react";
import Header from "../components/Header";

import { Card, Form } from "react-bootstrap";

// import mui library
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Switch from "@mui/material/Switch";
import CachedIcon from "@mui/icons-material/Cached";
import ButtonMui from "@mui/material/Button";

// import Button react js
import Button from "react-bootstrap/Button";

// import grid react js
import { Container, Row, Col } from "react-bootstrap";

// import banner diskon
import banner_home from "../styles/images/img_banner.png";

// import logo search
import search_logo from "../styles/images/fi_search.png";

// import css
import "../styles/home.css";
import CardFavDestination from "../components/CardFavDestination";
import Footer from "../components/Footer";

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
            {/* First Line Form Booking Destinasi */}
            <div className="frame_booking">
              <div>
                <h6 className="title_form">
                  Pilih Jadwal Penerbangan spesial di Tiketku!
                </h6>
              </div>
              <div className="content_form">
                <div>
                  <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="from-select-label-id">From</InputLabel>
                    <Select
                      labelId="from-select-label"
                      id="from-select"
                      // value={age}
                      label="From"
                      // onChange={handleChange}
                    >
                      <MenuItem value={"Jakarta"}>Jakarta</MenuItem>
                      <MenuItem value={"Bandung"}>Bandung</MenuItem>
                      <MenuItem value={"Semarang"}>Semarang</MenuItem>
                    </Select>
                    <FormHelperText>Dari mana anda?</FormHelperText>
                  </FormControl>

                  <CachedIcon sx={{ fontSize: 32 }} />
                  <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="to-select-label-id">To</InputLabel>
                    <Select
                      labelId="to-select-label"
                      id="to-select"
                      // value={age}
                      label="To"
                      // onChange={handleChange}
                    >
                      <MenuItem value={"Jakarta"}>Jakarta</MenuItem>
                      <MenuItem value={"Bandung"}>Bandung</MenuItem>
                      <MenuItem value={"Semarang"}>Semarang</MenuItem>
                    </Select>
                    <FormHelperText>Mau kemana anda?</FormHelperText>
                  </FormControl>

                  <FormControl sx={{ m: 1, minWidth: 430 }}>
                    <InputLabel id="passenger-select-label-id">
                      Passenger
                    </InputLabel>
                    <Select
                      labelId="passenger-select-label"
                      id="passenger-select"
                      // value={age}
                      label="Passenger"
                      // onChange={handleChange}
                    >
                      <MenuItem value={"Jakarta"}>Dewasa</MenuItem>
                      <MenuItem value={"Bandung"}>Anak</MenuItem>
                      <MenuItem value={"Semarang"}>Bayi</MenuItem>
                    </Select>
                    <FormHelperText>Berapa Penumpang?</FormHelperText>
                  </FormControl>
                </div>
                <div>
                  <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="departure-select-label-id">
                      Departure
                    </InputLabel>
                    <Select
                      labelId="departure-select-label"
                      id="departure-select"
                      // value={age}
                      label="Departure"
                      // onChange={handleChange}
                    >
                      <MenuItem value={"Jakarta"}>Tanggal Berangkat</MenuItem>
                    </Select>
                    <FormHelperText>Tanggal Berangkat</FormHelperText>
                  </FormControl>
                  {/* Switch untuk mengaktifkan return */}
                  <Switch size="small" />
                  <FormControl sx={{ m: 1, minWidth: 190 }}>
                    <InputLabel id="return-select-label-id">Return</InputLabel>
                    <Select
                      labelId="return-select-label"
                      id="return-select"
                      // value={age}
                      label="Return"
                      // onChange={handleChange}
                    >
                      <MenuItem value={"Jakarta"}>Tanggal Pulang</MenuItem>
                    </Select>
                    <FormHelperText>Tanggal Pulang</FormHelperText>
                  </FormControl>

                  <FormControl sx={{ m: 1, minWidth: 250 }}>
                    <InputLabel id="return-select-label-id">
                      Seat Class
                    </InputLabel>
                    <Select
                      labelId="return-select-label"
                      id="return-select"
                      // value={age}
                      label="Seat Class"
                      // onChange={handleChange}
                    >
                      <MenuItem value={"Economy"}>Economy</MenuItem>
                      <MenuItem value={"Premium Economy"}>
                        Premium Economy
                      </MenuItem>
                      <MenuItem value={"Business"}>Business</MenuItem>
                      <MenuItem value={"First Class"}>First Class</MenuItem>
                    </Select>
                    <FormHelperText>Kelas Penerbangan</FormHelperText>
                  </FormControl>

                  <ButtonMui
                    variant="contained"
                    size="large"
                    sx={{ m: 2, minWidth: 30 }}
                  >
                    Search
                  </ButtonMui>
                </div>
              </div>
            </div>
            {/* First Line Form Booking Destinasi */}
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
            <CardFavDestination />
          </div>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
