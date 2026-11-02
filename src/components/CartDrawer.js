import React from "react";
import ProductImage from "./ProductImage";

export default function CartDrawer({ open, onClose, items, onQty, onRemove, onClear, formatPrice }) {
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <>
      <div className={`overlay ${open ? "show" : ""}`} onClick={onClose} />
      <aside className={`drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="drawer-head">
          <h3>Your cart ({items.reduce((n, i) => n + i.qty, 0)})</h3>
          <button className="btn-ghost" onClick={onClose}>✕</button>
        </div>

        <div className="drawer-body">
          {items.length === 0 && (
            <div className="empty">
              <div className="empty-icon">🛒</div>
              <p>Your cart is empty.</p>
            </div>
          )}

          {items.map((item) => (
            <div key={item.id} className="cart-row">
              <div className="cart-top">
                <ProductImage product={item} className="cart-thumb" />
                <div className="cart-info">
                  <strong>{item.name}</strong>
                  <span className="muted">{item.brand}</span>
                  <span>{formatPrice(item.price)}</span>
                </div>
              </div>
              <div className="cart-controls">
                <div className="qty">
                  <button onClick={() => onQty(item.id, item.qty - 1)}>−</button>
                  <span>{item.qty}</span>
                  <button onClick={() => onQty(item.id, item.qty + 1)} disabled={item.qty >= item.stock}>+</button>
                </div>
                <button className="btn-link danger" onClick={() => onRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <div className="drawer-foot">
            <div className="subtotal">
              <span>Subtotal</span>
              <strong>{formatPrice(subtotal)}</strong>
            </div>
            <button
              className="btn-primary wide"
              onClick={() => alert("Demo store: checkout is not connected yet.")}
            >
              Checkout
            </button>
            <button className="btn-link" onClick={onClear}>Clear cart</button>
          </div>
        )}
      </aside>
    </>
  );
}
