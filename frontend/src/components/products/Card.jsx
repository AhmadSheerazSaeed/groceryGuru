import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import Review from "../review/Review";

export default function Card({ product, onUpdateReviews }) {
  return (
    <>
      <div className="card">
        <img src={product.imageUrl} className="card-img-top" alt="..." />

        <div className="card-body">
          <h5 className="card-title">{product.itemName}</h5>
          {/* <Review product = { product } /> */}
          <Review product={product} onUpdateReviews={onUpdateReviews} />

          <p className="card-text">
            <span style={{ color: "#F39317", fontWeight: "bold" }}>
              &euro;{product.salePrice}
            </span>
            <span style={{ textDecoration: "line-through" }}>
              &euro;{product.purchasePrice}
            </span>
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
