import "./App.css";
import { useEffect, useState } from "react";
import Product from "./components/product/Product";
import Cart from "./components/cart/Cart";
import OrderSummary from "./components/orderSummary/OrderSummary";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isConfirmingOrder, setIsConfirmingOrder] = useState(false);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products);

  return (
    <div className="app-container">
      <h1>Desserts</h1>
      <div className="products-grid">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        ))}
      </div>
      <Cart cartItems={cartItems} setIsConfirmingOrder={setIsConfirmingOrder} />
      {isConfirmingOrder && <OrderSummary cartItems={cartItems} />}
    </div>
  );
}

export default App;
