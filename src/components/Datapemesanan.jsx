import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";

const Datapemesanan = () => {
  const [showInput, setShowInput] = useState(false);

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  // First Line Get User Detail
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    axios
      .get("https://tiketku-production.up.railway.app/user/getDetail", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setName(response.data.data.fullname);
        setPhone(response.data.data.phone);
        setEmail(response.data.data.email);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // Last Line Get User Detail

  return (
    <div className="dataPemesanan">
      <h5 className="fw-bold mb-4">Isi Data Pemesanan</h5>
      <Card className="border-0">
        <Card.Header className="bg-dark text-light">
          Data Diri Pemesan
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                Nama Lengkap
              </Form.Label>
              <Form.Control type="text" value={name} />

              <div className="d-flex justify-content-between align-items-center mt-2">
                <Form.Text>Punya Nama Keluarga?</Form.Text>

                <Form.Check
                  type="switch"
                  id="custom-switch"
                  onClick={toggleInput}
                />
              </div>
            </Form.Group>

            {showInput && (
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                  Nama Keluarga
                </Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            )}

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                Nomor Telepon
              </Form.Label>
              <Form.Control type="text" value={phone} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                Email
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Contoh: react@gmail.com"
                value={email}
              />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Datapemesanan;
