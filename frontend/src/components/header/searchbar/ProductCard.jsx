import { useContext } from "react";
import "./ProductCard.css";
import { CartContext } from "../../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
    console.log("hello", product);
  };

  return (
    <div className="card mb-3 product-card">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={product.imageUrl}
            className="img-fluid rounded-start"
            alt="Product"
          />
          {console.log(product.imageUrl)}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.itemName}</h5>

            <p className="card-text">
              <strong>Description:</strong> {product.itemDescription}
            </p>
            <p className="card-text">
              <strong>Price:</strong> &euro;{product.purchasePrice}
            </p>
            <p className="card-text">
              <strong>Originaly from: </strong> {product.countryOfOrigin}
            </p>
            <p className="card-text">
              <strong>salePrice:</strong>
              {product.salePrice}
            </p>
            <button
              type="button"
              class="btn btn-outline-success"
              onClick={handleAddToCart}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
