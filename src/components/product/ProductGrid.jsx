import ProductCard from "./ProductCard";
import { products } from "../../data/products";
import "./ProductGrid.css";

function ProductGrid() {
  const firstFour = products.slice(0, 4);
  const lastProduct = products[4];

  return (
    <div className="products-wrapper">

      <div className="products-grid">
        {firstFour.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {lastProduct && (
        <div className="center-product">
          <ProductCard
            product={lastProduct}
          />
        </div>
      )}

    </div>
  );
}

export default ProductGrid;