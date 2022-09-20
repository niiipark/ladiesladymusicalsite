import React from "react";
import "./styles.scss";
import Navbar from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import CastAndCrew from "./pages/castandcrew";
import GetInvolved from "./pages/getinvolved";
import Demos from "./pages/demos";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/demos" element={<Demos />} />
        <Route path="/cast-and-crew" element={<CastAndCrew />} />
        <Route path="/get-involved" element={<GetInvolved />} />
      </Routes>
    </Router>
  );
}

export default App;
