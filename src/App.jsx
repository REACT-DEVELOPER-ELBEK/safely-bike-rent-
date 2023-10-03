import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import Notifications from "./pages/notifications/Notifications";
import Profile from "./pages/profile/Profile";
import Support from "./pages/support/Support";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
