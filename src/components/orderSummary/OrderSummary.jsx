import "./OrderSummary.css";

const OrderSummary = () => {
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
        <main className="order-items">
          <div className="order-item">
            <div className="order-item-image-and-details">
              <img
                src="/images/image-tiramisu-thumbnail.jpg"
                alt="Product Image"
                className="order-item-image"
              />
              <div className="order-item-details">
                <p className="order-item-name">Classic Tiramisu</p>
                <div className="order-item-count-and-price">
                  <span className="order-item-count">1x</span>
                  <span className="order-item-price">$5.50</span>
                </div>
              </div>
            </div>
            <p className="item-amount">$5.50</p>
          </div>
        </main>
        <div className="order-summary-total">
          <p className="order-summary-total-text">Order Total</p>
          <p className="order-summary-total-amount">$34.53</p>
        </div>
        <button className="start-new-order-button">Start New Order</button>
      </div>
    </div>
  );
};

export default OrderSummary;
