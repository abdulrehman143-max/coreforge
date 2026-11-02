import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import initialProducts, { CATEGORIES } from "./data/products";
import StoreHeader from "./components/StoreHeader";
import FilterSidebar from "./components/FilterSidebar";
import ProductCard from "./components/ProductCard";
import ProductModal from "./components/ProductModal";
import CartDrawer from "./components/CartDrawer";
import StoreFooter from "./components/StoreFooter";
import AdminLogin from "./components/AdminLogin";
import AdminRegister from "./components/AdminRegister";
import AdminDashboard from "./components/AdminDashboard";
import { getLoggedInAdmin, logoutAdmin } from "./components/adminAuth";

// Change this to switch currency display (e.g. "PKR", "GBP")
const CURRENCY = "USD";
const formatPrice = (n) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: CURRENCY, maximumFractionDigits: 0 }).format(n);

const PRICE_CEILING = Math.ceil(Math.max(...initialProducts.map((p) => p.price)) / 100) * 100;
const INVENTORY_KEY = "coreforge-inventory";
function loadInventory() { try { return JSON.parse(localStorage.getItem(INVENTORY_KEY)) || initialProducts; } catch { return initialProducts; } }

const SORTS = {
  featured: { label: "Featured", fn: (a, b) => b.rating * 10 + b.added - (a.rating * 10 + a.added) },
  "price-asc": { label: "Price: Low to High", fn: (a, b) => a.price - b.price },
  "price-desc": { label: "Price: High to Low", fn: (a, b) => b.price - a.price },
  rating: { label: "Top Rated", fn: (a, b) => b.rating - a.rating },
  newest: { label: "Newest", fn: (a, b) => b.added - a.added },
  "name-asc": { label: "Name: A to Z", fn: (a, b) => a.name.localeCompare(b.name) },
};

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem("coreforge-cart")) || [];
  } catch {
    return [];
  }
}

export default function App() {
  const [inventory, setInventory] = useState(loadInventory);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceMax, setPriceMax] = useState(PRICE_CEILING);
  const [minRating, setMinRating] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);

  const [cart, setCart] = useState(loadCart);
  const [cartOpen, setCartOpen] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [viewing, setViewing] = useState(null);

  // Which page to show: "store" | "login" | "register" | "admin"
  const [page, setPage] = useState("store");
  const [admin, setAdmin] = useState(getLoggedInAdmin);
  const priceCeiling = Math.ceil(Math.max(100, ...inventory.map((p) => Number(p.price) || 0)) / 100) * 100;
  useEffect(() => { setPriceMax((current) => Math.max(current, priceCeiling)); }, [priceCeiling]);

  useEffect(() => {
    try { localStorage.setItem(INVENTORY_KEY, JSON.stringify(inventory)); } catch { /* storage unavailable */ }
  }, [inventory]);

  useEffect(() => {
    try {
      localStorage.setItem("coreforge-cart", JSON.stringify(cart));
    } catch {
      /* storage unavailable - ignore */
    }
  }, [cart]);

  // Brands available inside the current category
  const brands = useMemo(() => {
    const pool = category === "all" ? inventory : inventory.filter((p) => p.category === category);
    return [...new Set(pool.map((p) => p.brand))].sort();
  }, [category, inventory]);

  const visible = useMemo(() => {
    const q = search.trim().toLowerCase();
    return inventory
      .filter((p) => category === "all" || p.category === category)
      .filter((p) => selectedBrands.length === 0 || selectedBrands.includes(p.brand))
      .filter((p) => p.price <= priceMax)
      .filter((p) => p.rating >= minRating)
      .filter((p) => !inStockOnly || p.stock > 0)
      .filter(
        (p) =>
          !q ||
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.specs.some((s) => s.toLowerCase().includes(q))
      )
      .sort(SORTS[sort].fn);
  }, [inventory, category, search, sort, selectedBrands, priceMax, minRating, inStockOnly]);

  const changeCategory = (id) => {
    setCategory(id);
    setSelectedBrands([]); // brands differ per category
  };

  const toggleBrand = (b) =>
    setSelectedBrands((cur) => (cur.includes(b) ? cur.filter((x) => x !== b) : [...cur, b]));

  const resetFilters = () => {
    setSelectedBrands([]);
    setPriceMax(priceCeiling);
    setMinRating(0);
    setInStockOnly(false);
    setSearch("");
  };

  const addToCart = (product) => {
    setCart((cur) => {
      const found = cur.find((i) => i.id === product.id);
      if (found) {
        return cur.map((i) => (i.id === product.id ? { ...i, qty: Math.min(i.qty + 1, i.stock) } : i));
      }
      return [...cur, { id: product.id, name: product.name, brand: product.brand, category: product.category, image: product.image, price: product.price, stock: product.stock, qty: 1 }];
    });
    setCartOpen(true);
  };

  const setQty = (id, qty) =>
    setCart((cur) => cur.map((i) => (i.id === id ? { ...i, qty } : i)).filter((i) => i.qty > 0));

  const removeItem = (id) => setCart((cur) => cur.filter((i) => i.id !== id));

  const cartCount = cart.reduce((n, i) => n + i.qty, 0);
  const activeCat = CATEGORIES.find((c) => c.id === category);

  // ---------- Admin pages ----------
  if (page === "register") {
    return <AdminRegister onGoLogin={() => setPage("login")} onBack={() => setPage("store")} />;
  }
  if (page === "login") {
    return (
      <AdminLogin
        onSuccess={() => { setAdmin(getLoggedInAdmin()); setPage("admin"); }}
        onGoRegister={() => setPage("register")}
        onBack={() => setPage("store")}
      />
    );
  }
  if (page === "admin" && admin) {
    return (
      <AdminDashboard
        admin={admin}
        products={inventory}
        onProductsChange={setInventory}
        formatPrice={formatPrice}
        onLogout={() => { logoutAdmin(); setAdmin(null); setPage("store"); }}
        onBack={() => setPage("store")}
      />
    );
  }

  return (
    <div className="app">
      <StoreHeader
        search={search}
        onSearch={setSearch}
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
        onToggleFilters={() => setFiltersOpen((o) => !o)}
        onAdminClick={() => setPage(admin ? "admin" : "login")}
      />

      <section className="hero">
        <h1>Build your dream PC</h1>
        <p>Gaming rigs, processors, graphics cards and every component in between.</p>
      </section>

      <nav className="category-bar" aria-label="Categories">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            className={`chip ${category === c.id ? "active" : ""}`}
            onClick={() => changeCategory(c.id)}
          >
            <span>{c.icon}</span> {c.label}
          </button>
        ))}
      </nav>

      <main className="layout">
        <FilterSidebar
          open={filtersOpen}
          onClose={() => setFiltersOpen(false)}
          brands={brands}
          selectedBrands={selectedBrands}
          onToggleBrand={toggleBrand}
          priceMax={priceMax}
          priceCeiling={priceCeiling}
          onPriceMax={setPriceMax}
          minRating={minRating}
          onMinRating={setMinRating}
          inStockOnly={inStockOnly}
          onInStockOnly={setInStockOnly}
          onReset={resetFilters}
          formatPrice={formatPrice}
        />

        <section className="results">
          <div className="toolbar">
            <p className="count">
              <strong>{visible.length}</strong> {visible.length === 1 ? "product" : "products"}
              {activeCat && category !== "all" ? ` in ${activeCat.label}` : ""}
            </p>
            <label className="sort">
              Sort by
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                {Object.entries(SORTS).map(([key, s]) => (
                  <option key={key} value={key}>{s.label}</option>
                ))}
              </select>
            </label>
          </div>

          {visible.length === 0 ? (
            <div className="empty">
              <div className="empty-icon">🔍</div>
              <p>No products match your filters.</p>
              <button className="btn-primary" onClick={resetFilters}>Clear filters</button>
            </div>
          ) : (
            <div className="grid">
              {visible.map((p) => (
                <ProductCard key={p.id} product={p} onAdd={addToCart} onView={setViewing} formatPrice={formatPrice} />
              ))}
            </div>
          )}
        </section>
      </main>

      <StoreFooter />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onQty={setQty}
        onRemove={removeItem}
        onClear={() => setCart([])}
        formatPrice={formatPrice}
      />

      <ProductModal product={viewing} onClose={() => setViewing(null)} onAdd={addToCart} formatPrice={formatPrice} />
    </div>
  );
}
