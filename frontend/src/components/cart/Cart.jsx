import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import cartCss from "./cart.module.css";
import { RiDeleteBin7Fill } from "react-icons/ri";
// RiDeleteBin7Fill

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, calculateCartTotalPrice } =
    useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleUpdateQuantity = (productId, quantityChange) => {
    updateQuantity(productId, quantityChange);
  };
  console.log(cartItems);
  return (
    <>
      <div className={cartCss.main}>
        <h2 className={cartCss.H2}>Your Cart</h2>
        {cartItems == null || cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems
              .sort((a, b) => a.itemName.localeCompare(b.itemName))
              .map((item) => (
                <div className={cartCss.productWrapper} key={item._id}>
                  <div className={cartCss.itemNameAndQtyWrapper}>
                    <div className={cartCss.productName}>{item.itemName}</div>
                    <div> Qty : {item.quantity}</div>
                  </div>
                  <div className={cartCss.imgWrapper}>
                    <img
                      className={cartCss.productImage}
                      src={item.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className={cartCss.productPriceBtnWrapper}>
                    <div className={cartCss.itemPrice}>
                      {item.purchasePrice.toFixed(2)}
                    </div>

                    <div className={cartCss.btnWrapper}>
                      <button
                        className={cartCss.deleteProductBtn}
                        onClick={() => handleRemoveFromCart(item._id)}
                      >
                        <RiDeleteBin7Fill />
                      </button>
                      <button
                        className={cartCss.addProductQtyBtn}
                        onClick={() => handleUpdateQuantity(item._id, 1)}
                      >
                        +
                      </button>
                      <button
                        className={cartCss.deleteProductQtyBtn}
                        onClick={() => handleUpdateQuantity(item._id, -1)}
                      >
                        -
                      </button>
                    </div>
                    <div className={cartCss.qtyAndPriceWrapper}>
                      <div className={cartCss.itemTotalText}>Item Total </div>
                      <div className={cartCss.itemQtyTotalPrice}>
                        {(item.quantity * item.purchasePrice).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            <div className={cartCss.grandTotal}>
              Grand Total : {calculateCartTotalPrice().toFixed(2)}€
            </div>
          </div>
        )}
        <div className={cartCss.checkoutBtnWrapper}>
          <button className={cartCss.checkoutBtn}> Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
