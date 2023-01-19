import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Services from "./Services";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import Aboutme from "./AboutMe";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Banner />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
