import React from "react";
import { CATEGORIES } from "../data/products";
import { Stars } from "./ProductCard";
import ProductImage from "./ProductImage";

export default function ProductModal({ product, onClose, onAdd, formatPrice }) {
  if (!product) return null;
  const cat = CATEGORIES.find((c) => c.id === product.category);
  const out = product.stock === 0;

  return (
    <div className="modal-wrap" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="modal-close btn-ghost" onClick={onClose}>✕</button>

        <div className="modal-img">
          <ProductImage product={product} />
        </div>

        <div className="modal-info">
          <p className="card-brand">{product.brand} · {cat ? cat.label : ""}</p>
          <h2>{product.name}</h2>
          <Stars rating={product.rating} />

          <h4>Specifications</h4>
          <ul className="spec-full">
            {product.specs.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <div className="modal-foot">
            <div className="price big">{formatPrice(product.price)}</div>
            <button
              className="btn-primary"
              disabled={out}
              onClick={() => {
                onAdd(product);
                onClose();
              }}
            >
              {out ? "Out of stock" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
