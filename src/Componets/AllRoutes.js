import React from "react";
import { Routes, Route } from "react-router-dom";
import AddProductForm from "../Pages/Admin/AddProductForm";
import Admin from "../Pages/Admin/Admin";

import Contact from "../Pages/Admin/Contact";
import EditProduct from "../Pages/Admin/EditProduct";
import Users from "../Pages/Admin/Users";
// import Preview from "../Pages/Preview";
import { ProductDetails } from "../Pages/ProductDetails";
import Products from "../Pages/Products";
import Home from "../Pages/Home"
import Mobile from "../Pages/Mobile"
// import { ProductDetails } from "../Pages/ProductDetails";

function AllRoutes() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/admin/addProduct" element={<AddProductForm />}></Route>
        <Route path="/admin/Product/edit/:id" element={<EditProduct />}></Route>
        <Route path="/admin/contact" element={<Contact />}></Route>
        <Route path="/admin/users" element={<Users />}></Route>
        <Route path="/ProductDetails" element={<ProductDetails />}></Route>

        <Route path="/mobile" element={<Mobile />}></Route>
        <Route path="/mobile/:id" element={<ProductDetails />}></Route>
      </Routes>
    </>
  );
}

export default AllRoutes;
