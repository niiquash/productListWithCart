const Cart = () => {
  return (
    <div className="cart">
      <h2 className="cart-heading">Your Cart (0)</h2>
      <div className="cart-details">
        <img
          src="/images/illustration-empty-cart.svg"
          alt="Empty cart"
          className="empty-cart-image"
        />
        <p className="empty-cart-text">Your added items will appear here</p>
      </div>
    </div>
  );
};

export default Cart;
