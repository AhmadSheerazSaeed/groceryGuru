import React from "react";

export default function CategoryItemCard({ product, handleAddToCart }) {
  return (
    <div>
      <div className="card">
        <img src={product.imageUrl} className="card-img-top" alt="..." />

        <div className="card-body">
          <h5 className="card-title">{product.categoryName}</h5>
          <p className="card-text"></p>

          <button
            onClick={() => handleAddToCart(product)}
            className="btn btn-primary"
            style={{ backgroundColor: "#F39317", borderColor: "#F39317" }}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
