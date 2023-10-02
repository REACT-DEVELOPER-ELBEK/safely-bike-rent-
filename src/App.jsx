import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import Download from "./pages/download/Download";
import QA from "./pages/Q&A/QA";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route path="/Q&A" element={<QA />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
