import { useBundle } from "../../context/BundleContext";
import { products } from "../../data/products";
import badge from "../../assets/images/badge.png"
import "./ReviewPanel.css";

function ReviewPanel() {
  const { cart, updateQuantity } = useBundle();

  const selectedItems = Object.values(cart).filter(
    (item) => item.quantity > 0
  );

  const subtotal = selectedItems.reduce((sum, item) => {
    const product = products.find(
      (p) => p.id === item.productId
    );

    if (!product) return sum;

    return sum + product.price * item.quantity;
  }, 0);

  const totalOldPrice = selectedItems.reduce(
    (sum, item) => {
      const product = products.find(
        (p) => p.id === item.productId
      );

      if (!product?.oldPrice) return sum;

      return (
        sum +
        product.oldPrice * item.quantity
      );
    },
    0
  );

  const savings = totalOldPrice - subtotal;

  return (
    <div className="review-panel">

      <span className="review-label">
        REVIEW
      </span>

      <h2 className="review-title">
        Your security system
      </h2>

      <p className="review-description">
        Review your personalized protection
        system designed to keep what matters
        most safe.
      </p>

      <div className="divider" />

      <div className="section-title">
        CAMERAS
      </div>

      {selectedItems.length === 0 ? (
        <p className="empty-text">
          No cameras selected
        </p>
      ) : (
        selectedItems.map((item) => {
          const product = products.find(
            (p) => p.id === item.productId
          );

          if (!product) return null;

          return (
            <div
              key={`${item.productId}-${item.variantId}`}
              className="review-item"
            >
              <img
                src={product.image}
                alt={product.name}
              />

              <div className="review-info">
                <h5>{product.name}</h5>
              </div>

              <div className="review-qty">

                <button
                  onClick={() =>
                    updateQuantity(
                      item.productId,
                      item.variantId,
                      Math.max(
                        0,
                        item.quantity - 1
                      )
                    )
                  }
                >
                  -
                </button>

                <span>
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    updateQuantity(
                      item.productId,
                      item.variantId,
                      item.quantity + 1
                    )
                  }
                >
                  +
                </button>

              </div>

              <div className="review-price">

                {product.oldPrice && (
                  <span className="old-price">
                    $
                    {(
                      product.oldPrice *
                      item.quantity
                    ).toFixed(2)}
                  </span>
                )}

                <span className="new-price">
                  $
                  {(
                    product.price *
                    item.quantity
                  ).toFixed(2)}
                </span>

              </div>

            </div>
          );
        })
      )}

      <div className="divider" />

      <div className="review-footer">

        <div className="footer-top">

          <img
            src={badge}
            alt="badge"
            className="badge-image"
          />

          <div className="footer-price">

            <span className="finance-text">
              as low as $19/mo
            </span>

            <div className="price-wrapper">

              <span className="old-total">
                ${totalOldPrice.toFixed(2)}
              </span>

              <span className="new-total">
                ${subtotal.toFixed(2)}
              </span>

            </div>

          </div>

        </div>

        <div className="saving-message">
          Congrats! You're saving $
          {savings.toFixed(2)}
          {" "}on your security bundle!
        </div>

        <button className="checkout-btn">
          Checkout
        </button>

        <button className="save-btn">
          Save my system for later
        </button>

      </div>

    </div>
  );
}

export default ReviewPanel;