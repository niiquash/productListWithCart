import AddToCartButton from "../addToCartButton/addToCartButton";
const Product = ({ product }) => {
  return (
    <>
      <div className="product-card">
        <div className="product-image-and-button">
          <img
            src={product.image.thumbnail}
            alt={product.name}
            className="product-image"
          />
          <AddToCartButton />
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
