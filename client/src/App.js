// 22 impo BrowserRouter, ProduList // BrowRout, Routes, Route1
// 26 impo AddProduct ,Route2
// 30 impo EditProduct ,Route3

import {  Routes, Route } from "react-router-dom";
import ProductList from "./components/Productlist";
import AddProduct from "./components/AddProduct";
import EditProduct  from "./components/EditProduct";

function App() {
  return (
    // <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="add" element={<AddProduct />} />
        <Route path="edit/:id" element={<EditProduct/>} />
      </Routes>
    // </BrowserRouter>
  );
}

export default App;
