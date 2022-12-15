import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "../Pages/Admin/Admin";
import Home from "../Pages/Home";
import Preview from "../Pages/Preview";
import Products from "../Pages/Products";
function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/preview" element={<Preview />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </>
  );
}

export default AllRoutes;
