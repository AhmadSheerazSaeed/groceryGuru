import React from "react";
import { Link } from 'react-router-dom';
import "./Card.css";

export default function Card({ product }) {
  return (
    <>
      <div className="card">
        <img src={product.imageUrl} className="card-img-top" alt="..." />

        <div className="card-body">
          <h5 className="card-title">{product.itemName}</h5>
          <p className="card-text">
            <span style={{ color: "#F39317", fontWeight: "bold" }}></span>
            &euro;{product.purchasePrice}
          </p>
          {/* <a
            href="#"
            className="btn btn-primary"
            style={{ backgroundColor: "#F39317", borderColor: "#F39317" }}
          >
            Buy
          </a> */}
          <Link
            to={`/productdetails/${product._id}`}
            className="btn btn-primary"
            style={{ backgroundColor: "#F39317", borderColor: "#F39317" }}
          >
            Details
          </Link>
        </div>
      </div>
    </>
  );
}
