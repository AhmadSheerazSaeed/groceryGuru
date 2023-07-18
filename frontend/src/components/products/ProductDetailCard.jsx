import React from "react";
import "./ProductDetail.css";
export default function ProductDetailCard({ productDetail }) {
  return (
    <div className="card mb-3 product-card">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={productDetail.imageUrl}
            className="img-fluid rounded-start"
            alt="Product"
          />
          {console.log(productDetail.imageUrl)}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{productDetail.itemName}</h5>

            <p className="card-text">
              <strong>Description:</strong> {productDetail.itemDescription}
            </p>
            <p className="card-text">
              <strong>Price:</strong> &euro;{productDetail.purchasePrice}
            </p>
            <p className="card-text">
              <strong>Originaly from: </strong> {productDetail.countryOfOrigin}
            </p>
            <p className="card-text">
              <strong>salePrice:</strong>
              {productDetail.salePrice}
            </p>
            <button type="button" class="btn btn-outline-success">
              ADD TO CARD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
