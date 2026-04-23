const QuantityButton = () => {
  return (
    <div className="quantity-button">
      <button className="quantity-reduce-button">
        <img src="/images/icon-decrement-quantity.svg" alt="minus icon" />
      </button>
      <span className="quantity">1</span>
      <button className="quantity-increase-button">
        <img src="/images/icon-increment-quantity.svg" alt="plus icon" />
      </button>
    </div>
  );
};

export default QuantityButton;
