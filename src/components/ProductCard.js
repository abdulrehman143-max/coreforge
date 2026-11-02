import React from "react";
import ProductImage from "./ProductImage";

export function Stars({ rating }) {
  const full = Math.round(rating);
  return (
    <span className="stars" aria-label={`${rating} out of 5`}>
      {"★".repeat(full)}
      <span className="stars-off">{"★".repeat(5 - full)}</span>
      <span className="rating-num">{rating.toFixed(1)}</span>
    </span>
  );
}

export default function ProductCard({ product, onAdd, onView, formatPrice }) {
  const out = product.stock === 0;

  return (
    <article className={`card ${out ? "is-out" : ""}`}>
      <div className="card-img" onClick={() => onView(product)}>
        <ProductImage product={product} />
        {product.badge && <span className="badge">{product.badge}</span>}
      </div>

      <div className="card-body">
        <p className="card-brand">{product.brand}</p>
        <h3 className="card-title" onClick={() => onView(product)}>{product.name}</h3>
        <Stars rating={product.rating} />

        <ul className="spec-mini">
          {product.specs.slice(0, 3).map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <div className="card-foot">
          <div>
            <div className="price">{formatPrice(product.price)}</div>
            <div className={`stock ${out ? "out" : product.stock <= 5 ? "low" : ""}`}>
              {out ? "Out of stock" : product.stock <= 5 ? `Only ${product.stock} left` : "In stock"}
            </div>
          </div>
          <button className="btn-primary" disabled={out} onClick={() => onAdd(product)}>
            {out ? "Sold out" : "Add to cart"}
          </button>
        </div>
      </div>
    </article>
  );
}
