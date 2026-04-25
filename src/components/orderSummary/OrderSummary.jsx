import "./OrderSummary.css";

const OrderSummary = ({
  cartItems,
  setIsConfirmingOrder,
  setCartItems,
  setIsOrderConfirmed,
}) => {
  const restartOrder = () => {
    setIsConfirmingOrder(false);
    setIsOrderConfirmed(true);
    setCartItems([]);
  };
  return (
    <div className="order-summary-overlay">
      <div className="order-summary">
        <header className="order-summary-header">
          <img
            src="/images/icon-order-confirmed.svg"
            alt="Checkmark"
            className="checkmark-icon"
          />
          <h1 className="order-confirmed-heading">Order Confirmed</h1>
          <p className="order-confirmed-text">We hope you enjoy your food!</p>
        </header>
        <div className="order-items-and-total">
          <main className="order-items">
            {cartItems.map((item) => (
              <div key={item.id} className="order-item">
                <div className="order-item-image-and-details">
                  <img
                    src={item.image.thumbnail}
                    alt="Product Image"
                    className="order-item-image"
                  />
                  <div className="order-item-details">
                    <p className="order-item-name">{item.name}</p>
                    <div className="order-item-count-and-price">
                      <span className="order-item-count">{item.quantity}x</span>
                      <span className="order-item-price">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="item-amount">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </main>
          <div className="order-summary-total">
            <p className="order-summary-total-text">Order Total</p>
            <p className="order-summary-total-amount">
              $
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </p>
          </div>
        </div>
        <button
          className="start-new-order-button"
          onClick={() => {
            restartOrder();
          }}
        >
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
