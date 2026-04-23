import "./App.css";
import { useEffect, useState } from "react";
import Product from "./components/product/Product";
import Cart from "./components/cart/Cart";

function App() {
  const [products, setProducts] = useState([]);

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
          <Product key={product.id} product={product} />
        ))}
      </div>
      <Cart />
    </div>
  );
}

export default App;
