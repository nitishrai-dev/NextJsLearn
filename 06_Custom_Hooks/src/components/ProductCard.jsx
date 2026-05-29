import {FaShoppingCart} from "react-icons/fa";
function ProductCard({product, onAddToCart}) {
  return (
    <div className="product-cart">
      <h3>{product.name}</h3>
      <p className="price">${product.price}</p>
      <button className="add-to-cart" onClick={()=>onAddToCart(product)}>
        <FaShoppingCart /> Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
 