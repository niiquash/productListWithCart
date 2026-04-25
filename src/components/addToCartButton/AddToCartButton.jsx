import "./AddToCartButton.css";

const AddToCartButton = ({ handleAddToCartClick }) => {
  return (
    <button className="add-to-cart-button" onClick={handleAddToCartClick}>
      <img
        src="/images/icon-add-to-cart.svg"
        alt="Icon of a cart"
        className="cart-image"
      />
      <span className="add-to-cart-button-text wrap">Add to Cart</span>
    </button>
  );
};

export default AddToCartButton;
