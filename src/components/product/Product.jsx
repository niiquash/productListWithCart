import { useEffect, useState } from "react";
import AddToCartButton from "../addToCartButton/addToCartButton";
import QuantityButton from "../quantityButton/QuantityButton";
import "./Product.css";

const Product = ({ product, cartItems, setCartItems, isOrderConfirmed }) => {
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (isOrderConfirmed) {
      setIsAddingToCart(false);
      setQuantity(1);
    }
  }, [isOrderConfirmed]);

  const handleAddToCartClick = () => {
    setIsAddingToCart(true);
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity === 0) {
      setIsAddingToCart(false);
      setCartItems(cartItems.filter((items) => items.id !== product.id));
    } else {
      setQuantity(newQuantity);
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: newQuantity } : item,
        ),
      );
    }
  };

  console.log(cartItems);
  return (
    <>
      <div className="product-card">
        <div className="product-image-and-button">
          <img
            src={product.image.mobile}
            alt={product.name}
            className="product-image"
          />

          {isAddingToCart ? (
            <QuantityButton
              quantity={quantity}
              handleQuantityChange={handleQuantityChange}
            />
          ) : (
            <AddToCartButton handleAddToCartClick={handleAddToCartClick} />
          )}
        </div>
        <div className="product-info">
          <p className="product-category">{product.category}</p>
          <h2 className="product-name">{product.name}</h2>
          <p className="product-price">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
};

export default Product;
