import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Import routing components
import "./App.css";
import ButtonAppBar from "./components/navbar";
import Fantasie from "./pages/fantasie";
import Home from "./pages/home";
import News from "./pages/news";
import Services from "./pages/services"; // Import your Services page

function App() {
  return (
    <Router>
      <div className="App">
        <ButtonAppBar /> {/* Navbar is rendered on all pages */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/news" element={<News />} />{" "}
          <Route path="/services" element={<Services />} />{" "}
          <Route path="/fantasie" element={<Fantasie />} />{" "}
          {/* Services page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
