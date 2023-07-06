import React from 'react'

import "./Card.css";

export default function Card({ product }) {
  return (
    <>

      <div className="card" >
        <img src={product.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.itemName}</h5>
          <p className="card-text"> 
          Some quick example text to build on the card title and make up the bulk of the  content.
          </p>
          <a href="#" className="btn btn-primary"  style={{ backgroundColor: "#F39317", borderColor: "#F39317" }} >
          Sale
          </a>
        </div>
      </div>
    </>
  );
}
