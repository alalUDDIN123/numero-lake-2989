import React from "react";
import { Routes, Route } from "react-router-dom";
import AddProductForm from "../Pages/Admin/AddProductForm";
import Admin from "../Pages/Admin/Admin";

import Contact from "../Pages/Admin/Contact";
import EditProduct from "../Pages/Admin/EditProduct";
import Users from "../Pages/Admin/Users";
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
        <Route path="/admin/addProduct" element={<AddProductForm />}></Route>
        <Route path="/admin/Product/edit/:id" element={<EditProduct />}></Route>
        <Route path="/admin/contact" element={<Contact />}></Route>
        <Route path="/admin/users" element={<Users />}></Route>
      </Routes>
    </>
  );
}

export default AllRoutes;
