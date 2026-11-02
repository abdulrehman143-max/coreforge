import React from "react";

export default function StoreHeader({ search, onSearch, cartCount, onCartClick, onToggleFilters, onAdminClick }) {
  return (
    <header className="store-header">
      <div className="header-inner">
        <div className="logo">
          <span className="logo-mark">⚙️</span>
          <span className="logo-text">
            Core<span>Forge</span>
          </span>
        </div>

        <div className="search-box">
          <input
            type="search"
            placeholder="Search CPUs, GPUs, gaming PCs, brands..."
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            aria-label="Search products"
          />
        </div>

        <div className="header-actions">
          <button className="btn-ghost mobile-only" onClick={onToggleFilters}>
            ☰ Filters
          </button>
          <button className="btn-ghost" onClick={onAdminClick}>
            👤 Admin
          </button>
          <button className="cart-btn" onClick={onCartClick}>
            🛒 Cart
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}
