import "./QuantityButton.css";

const QuantityButton = ({ quantity, handleQuantityChange }) => {
  const handleIncrease = () => {
    handleQuantityChange(quantity + 1);
  };
  const handleDecrease = () => {
    if (quantity > 0) {
      handleQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="quantity-button">
      <button className="quantity-reduce-button" onClick={handleDecrease}>
        <img src="/images/icon-decrement-quantity.svg" alt="minus icon" />
      </button>
      <span className="quantity">{quantity}</span>
      <button className="quantity-increase-button" onClick={handleIncrease}>
        <img src="/images/icon-increment-quantity.svg" alt="plus icon" />
      </button>
    </div>
  );
};

export default QuantityButton;
