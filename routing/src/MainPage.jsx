/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeKalvium from "./components/Home(Kalvium)";
import Contact from "./components/Contact";
import About from "./components/About";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeKalvium />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AllRoutes;
