import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Details from "../Details/Details";

const Layout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<Details />} />
      </Routes>
    </>
  );
};

export default Layout;
