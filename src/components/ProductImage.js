import React, { useState } from "react";
import { getProductImage } from "../data/productImage";

// Shows the product picture. If a custom photo fails to load, it falls back to the drawing.
export default function ProductImage({ product, className = "" }) {
  const [failed, setFailed] = useState(false);
  const src = failed ? getProductImage({ ...product, image: "" }) : getProductImage(product);

  return (
    <img
      className={`product-img ${className}`}
      src={src}
      alt={product.name}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
