import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Lupasandi from "./pages/Lupasandi";
// import Register from "./pages/Register";
// import Otp from "./pages/Otp";
import Otp from "./pages/FlightForm";
import FlightForm from "./pages/FlightForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<FlightForm />} />
          {/* <Route path="/Home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Lupasandi" element={<Lupasandi />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/verifikasi-otp" element={<Otp />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
