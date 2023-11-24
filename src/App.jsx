import { BrowserRouter, Route, Routes } from "react-router-dom";
import CryptoHome from "./Pages/CryptoHome.jsx";
import Navbar from "./Components/Navbar.jsx";
import Trending from "./Components/Trending.jsx";
import Markets from "./Components/Markets.jsx";
import CryptoDetails from "./Pages/CryptoDetails.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<CryptoHome />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/coin/:id" element={<CryptoDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
