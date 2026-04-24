import AddToCartButton from "../addToCartButton/addToCartButton";
import QuantityButton from "../quantityButton/QuantityButton";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <>
      <div className="product-card">
        <div className="product-image-and-button">
          <img
            src={product.image.mobile}
            alt={product.name}
            className="product-image"
          />
          <AddToCartButton />
          <QuantityButton />
        </div>
        <div className="product-info">
          <p className="product-category">{product.category}</p>
          <h2 className="product-name">{product.name}</h2>
          <p className="product-price">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
};

export default Product;
