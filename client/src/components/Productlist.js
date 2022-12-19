// 20 impo React // - con ProduList // - div1 div2 div3 , <div3> card:b </div3> // - expo defa ProduList
// 21 footer, a1, a2
// 23 impo useState,useEffect ,axios // con produ ,getPordu
// 24 เพิ่มไปในส่วน return >> {products.map} มาครอบ div3, key={}, src={}, {produ.name}
// 28 con deleteProduct กับข้อมูลข้างใน , เพิ่ม onclick ใน a2
// 31 impo Link, <Link>
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/products/${productId}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mt-5 ">
      <Link to="/add" className="button is-success">
        Add New
      </Link>
      <div className="columns is-multiline mt-2">
        {products.map((product) => (
          // <div className="colum is-one-quarter">
          <div className="column is-one-quarter" key={product.id}>
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  {/* <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/> */}
                  <img src={product.url} alt="Image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">{product.name}</p>
                    {/* <p class="subtitle is-6">@johnsmith</p> */}
                  </div>
                </div>
              </div>
              <footer className="card-footer">
                <Link to={`edit/${product.id}`} className="card-footer-item">
                  Edit
                </Link>
                {/* <a className="card-footer-item">Edit</a> */}
                {/* <a onClickclassName="caed-footer-item"></a> */}
                <a
                  onClick={() => deleteProduct(product.id)}
                  className="card-footer-item"
                >
                  Delete
                </a>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
