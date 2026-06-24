import { useState } from "react";
import { useBundle } from "../../context/BundleContext";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { updateQuantity, getQuantity } = useBundle();

  const [selectedVariant, setSelectedVariant] = useState(
    product.variants?.[0]?.id || "default"
  );

  const qty = getQuantity(
    product.id,
    selectedVariant
  );

  const increaseQty = () => {
    updateQuantity(
      product.id,
      selectedVariant,
      qty + 1
    );
  };

  const decreaseQty = () => {
    updateQuantity(
      product.id,
      selectedVariant,
      Math.max(0, qty - 1)
    );
  };

  return (
    <div
      className={`product-card ${
        qty > 0 ? "selected-card" : ""
      }`}
    >
      {product.discount && (
        <div className="discount-badge">
          Save {product.discount}%
        </div>
      )}

      <div className="card-content">

        {/* IMAGE */}
        <div className="image-wrapper">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        {/* CONTENT */}
        <div className="content-wrapper">

          <h5>{product.name}</h5>

          <p className="product-description">
            {product.description}
          </p>

          <a href="#" className="learn-more">
            Learn More
          </a>

          {product.variants && (
            <div className="variants">

              {product.variants.map(
                (variant) => (
                  <div
                    key={variant.id}
                    onClick={() =>
                      setSelectedVariant(
                        variant.id
                      )
                    }
                    className={`variant-item ${
                      selectedVariant ===
                      variant.id
                        ? "active"
                        : ""
                    }`}
                  >
                    <img
                      src={variant.image}
                      alt={variant.name}
                    />

                    <span>
                      {variant.name}
                    </span>
                  </div>
                )
              )}

            </div>
          )}

          <div className="footer">

            <div className="quantity">

              <button
                onClick={decreaseQty}
                className="qty-btn"
              >
                -
              </button>

              <span className="qty-value">
                {qty}
              </span>

              <button
                onClick={increaseQty}
                className="qty-btn"
              >
                +
              </button>

            </div>

            <div className="price">

              {product.oldPrice && (
                <span className="old-price">
                  
                  ${product.oldPrice}
                </span>
              )}

              <span className="new-price">
                ${product.price}
              </span>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ProductCard;