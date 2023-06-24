import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Lupasandi from "./pages/Lupasandi";
import Register from "./pages/Register";
import Otp from "./pages/Otp";
import SearchResult from "./pages/SearchResult";
import DetailAccount from "./pages/Account";
import RiwayatPemesanan from "./pages/Riwayat";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/lupasandi" element={<Lupasandi />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verifikasi-otp" element={<Otp />} />
          <Route path="/search_result" element={<SearchResult />} />
          <Route path="/akun" element={<DetailAccount />} />
          <Route path="/riwayat" element={<RiwayatPemesanan />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
