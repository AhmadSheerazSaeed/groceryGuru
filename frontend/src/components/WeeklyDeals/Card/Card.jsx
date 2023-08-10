import {useContext} from "react";
import { CartContext } from "../../context/CartContext";
import "./Card.css";

export default function Card({ product }) {
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = () => {
    addToCart(product);
  };
  return (
    <>
      <div className="card">
        <img src={product.imageUrl} className="card-img-top" alt="..." />
        {/* <img src={berebere} className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">{product.itemName}</h5>
          <p className="card-text">
            <span style={{ color: "#F39317", fontWeight: "bold" }}>
              &euro;{product.salePrice}
            </span>
            <span style={{ textDecoration: "line-through" }}>
              &euro;{product.purchasePrice}
            </span>
          </p>
          <button
            href="#"
            className="btn btn-primary"
            style={{ backgroundColor: "#F39317", borderColor: "#F39317" }}
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </>
  );
}
