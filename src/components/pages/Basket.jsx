import React, { useContext } from "react";
import BreadCumb from "../HomeUi/BreadCumb";
import BasketEmtyImg from "../../Assets/Image/cart.avif";
import { Link } from "react-router-dom";
import { CartContext } from "../../components/context/cardContext";

const Basket = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const maxQuantity = 10;
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );
  const increaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && (item.quantity || 1) < maxQuantity
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  };
  
  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && (item.quantity || 1) > 1
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item
      )
    );
  };
  

  const removeItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };


  const shippingFee = 50;
  const total = subtotal + shippingFee;

  return (
    <div>
      <BreadCumb page1="Home" mainPage="Your Shopping Cart" />
      <div className="container mx-auto px-8">
        {cartItems.length === 0 ? (
          <div className="emptyBox flex flex-col items-center justify-center py-11 gap-6">
            <h1 className="mb-[30px] text-[35px] text-[#343434]">
              Shopping Cart is Empty.
            </h1>
            <img className="w-[120px]" src={BasketEmtyImg} alt="basket-empty" />
            <p>You have no items in your shopping cart.</p>
            <Link to="/" className="hover:text-my_red transition-all">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="basketBoxList py-11 flex justify-between flex-wrap">
            <div className="basketTable flex justify-center">
              <table>
                <thead>
                  <tr>
                    <th className="productName">PRODUCT</th>
                    <th className="productPrice">PRICE</th>
                    <th className="productQuantity">QUANTITY</th>
                    <th className="productTotal">TOTAL</th>
                    <th className="productRemove">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="productThumbnail px-11">
                        <img
                          className="w-[115px]"
                          src={item.image}
                          alt={item.name}
                        />
                      </td>
                      <td className="productName text-center px-11">
                        <p className="text-[16px]">{item.name}</p>
                        <p>{item.color}</p>
                      </td>
                      <td className="productQuantity text-center px-11">
                        <div className="flex items-center gap-4 justify-center border-[1px] px-3 py-1">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            disabled={item.quantity === 1}
                            className="text-[15px]"
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => increaseQuantity(item.id)}
                            disabled={item.quantity === maxQuantity}
                            className="text-[15px]"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="productTotalPrice px-11 text-center">
                        ${item.price * item.quantity}
                      </td>
                      <td className="productRemove py-6">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[18px]"
                        >
                          <i className="fa-solid fa-xmark rounded-[100%] border-[1px] border-my_dark_gray p-2"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="cardTotals flex items-center flex-col justify-end max-w-[400px] gap-8 bg-[#f7f7f7]">
              <h1 className="text-[34px]">Cart Totals</h1>
              <table>
                <tbody>
                  <tr>
                    <th className="px-11">Subtotal</th>
                    <td className="px-11">${subtotal.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <th className="px-11">Shipping</th>
                    <td className="px-11">${shippingFee}</td>
                  </tr>
                  <tr>
                    <th className="px-11">Total</th>
                    <td className="px-11">${total.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
              <button className="bg-my_orange px-3 py-3 rounded text-my_white mb-5">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
