import React from "react";
import "./App.css";
import ButtonAppBar from "./components/navbar";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Home />
    </div>
  );
}

export default App;
