import "./AddToCartButton.css";

const AddToCartButton = () => {
  return (
    <div className="add-to-cart-button-container">
      <button className="add-to-cart-button">
        <img
          src="/images/icon-add-to-cart.svg"
          alt="Icon of a cart"
          className="cart-image"
        />
        <span className="add-to-cart-button-text">Add to Cart</span>
      </button>
    </div>
  );
};

export default AddToCartButton;
