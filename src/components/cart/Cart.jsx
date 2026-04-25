import "./Cart.css";

const Cart = ({ cartItems }) => {
  const getTotalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="cart">
      <h2 className="cart-heading">Your Cart ({cartItems.length})</h2>

      {cartItems.length === 0 ? (
        <div className="cart-details empty-cart">
          <img
            src="/images/illustration-empty-cart.svg"
            alt="Empty cart"
            className="empty-cart-image"
          />
          <p className="empty-cart-text">Your added items will appear here</p>
        </div>
      ) : (
        <div className="cart-details filled-cart">
          <div className="cart-items">
            {cartItems.map((item) => (
              <>
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <h3 className="cart-item-heading">{item.name}</h3>
                    <div className="cart-item-amounts">
                      <span className="item-quantity">{item.quantity}x</span>
                      <span className="item-unit-price">
                        @ ${item.price.toFixed(2)}
                      </span>
                      <span className="item-total-price">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button className="remove-item-button">
                    <img
                      src="/images/icon-remove-item.svg"
                      alt="remove item icon"
                    />
                  </button>
                </div>
              </>
            ))}
          </div>

          <div className="order-total">
            <p className="order-total-text">Order Total</p>
            <p className="order-total-amount">${getTotalPrice}</p>
          </div>
          <div className="delivery-note">
            <img
              src="/images/icon-carbon-neutral.svg"
              alt="icon of a tree"
              className="carbon-neutral-icon"
            />
            <p className="delivery-note-text">
              This is a <span>carbon-neutral</span> delivery
            </p>
          </div>

          <button className="confirm-order-button">Confirm Order</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
