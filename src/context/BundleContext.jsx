import { createContext, useContext, useState, useEffect } from "react";

const BundleContext = createContext();

export function BundleProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const updateQuantity = (productId, variantId, quantity) => {
    const key = `${productId}__${variantId}`;

    setCart((prev) => ({
      ...prev,
      [key]: {
        productId,
        variantId,
        quantity,
      },
    }));
  };

  const getQuantity = (productId, variantId) => {
    const key = `${productId}__${variantId}`;
    return cart[key]?.quantity || 0;
  };

  const selectedCount = Object.values(cart).filter(
    (i) => i.quantity > 0
  ).length;

  return (
    <BundleContext.Provider
      value={{
        cart,
        updateQuantity,
        getQuantity,
        selectedCount,
      }}
    >
      {children}
    </BundleContext.Provider>
  );
}

export function useBundle() {
  return useContext(BundleContext);
}