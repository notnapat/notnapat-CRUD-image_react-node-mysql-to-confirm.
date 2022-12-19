// 20 impo React // - con ProduList // - div1 div2 div3 , <div3> card:b </div3> // - expo defa ProduList
// 21 <footer> <a></a> <a></a></footer>
import React from "react";

const ProductList = () => {
    return (
        <div className="container mt-5">
            <div className="columns is-multiline">
                <div className="colum is-one-quarter">
                    <div class="card">
                      <div class="card-image">
                        <figure class="image is-4by3">
                          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="media">
                          <div class="media-content">
                            <p class="title is-4">John Smith</p>
                            <p class="subtitle is-6">@johnsmith</p>
                          </div>
                        </div>
                      </div>
                    <footer className="card-footer">
                        <a className="card-footer-item"></a>
                        <a className="caed-footer-item"></a>
                    </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList;