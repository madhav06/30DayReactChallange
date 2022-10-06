import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import AllFood from "../pages/AllFood";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import FoodDetails from "../pages/FoodDetails";
import Login from "../pages/Login";
import Payment from "../pages/Payment";
import SignUp from "../pages/SignUp";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />

      <Route path="/foods" element={<AllFood />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/contact" element={<Contact />} />

      {/* <Route path="/" element={<Navigate to="/home" />} /> */}

      <Route path="/foods/:id" element={<FoodDetails />} />

      <Route path="/login" element={<Login />} />

      <Route path="/checkout" element={<Payment />} />

      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default Routers;
