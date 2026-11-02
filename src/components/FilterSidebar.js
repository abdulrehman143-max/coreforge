import React from "react";

export default function FilterSidebar({
  open,
  onClose,
  brands,
  selectedBrands,
  onToggleBrand,
  priceMax,
  priceCeiling,
  onPriceMax,
  minRating,
  onMinRating,
  inStockOnly,
  onInStockOnly,
  onReset,
  formatPrice,
}) {
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <div className="sidebar-head">
        <h3>Filters</h3>
        <button className="btn-link" onClick={onReset}>Reset all</button>
        <button className="btn-ghost mobile-only" onClick={onClose}>✕</button>
      </div>

      <div className="filter-group">
        <h4>Max price: <strong>{formatPrice(priceMax)}</strong></h4>
        <input
          type="range"
          min="0"
          max={priceCeiling}
          step="10"
          value={priceMax}
          onChange={(e) => onPriceMax(Number(e.target.value))}
        />
        <div className="range-labels">
          <span>{formatPrice(0)}</span>
          <span>{formatPrice(priceCeiling)}</span>
        </div>
        <div className="quick-prices">
          {[25, 50, 100, 500].map((n) => (
            <button
              key={n}
              className={`mini-chip ${priceMax === n ? "active" : ""}`}
              onClick={() => onPriceMax(n)}
            >
              Under {formatPrice(n)}
            </button>
          ))}
          <button
            className={`mini-chip ${priceMax === priceCeiling ? "active" : ""}`}
            onClick={() => onPriceMax(priceCeiling)}
          >
            Any
          </button>
        </div>
      </div>

      <div className="filter-group">
        <h4>Minimum rating</h4>
        <select value={minRating} onChange={(e) => onMinRating(Number(e.target.value))}>
          <option value={0}>Any rating</option>
          <option value={4}>4.0 ★ &amp; up</option>
          <option value={4.5}>4.5 ★ &amp; up</option>
          <option value={4.8}>4.8 ★ &amp; up</option>
        </select>
      </div>

      <div className="filter-group">
        <label className="check">
          <input type="checkbox" checked={inStockOnly} onChange={(e) => onInStockOnly(e.target.checked)} />
          In stock only
        </label>
      </div>

      <div className="filter-group">
        <h4>Brand</h4>
        <div className="brand-list">
          {brands.map((b) => (
            <label key={b} className="check">
              <input
                type="checkbox"
                checked={selectedBrands.includes(b)}
                onChange={() => onToggleBrand(b)}
              />
              {b}
            </label>
          ))}
          {brands.length === 0 && <p className="muted">No brands in this category.</p>}
        </div>
      </div>
    </aside>
  );
}
