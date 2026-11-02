import React, { useMemo, useState } from "react";
import { CATEGORIES } from "../data/products";
import ProductImage from "./ProductImage";
import initialProducts from "../data/products";

const blank = { name: "", brand: "", category: "cpu", price: "", stock: "", rating: "4.5", badge: "", specs: "" };
const money = (n, formatPrice) => formatPrice(Number(n) || 0);

export default function AdminDashboard({ admin, products, onProductsChange, onLogout, onBack, formatPrice }) {
  const [section, setSection] = useState("Overview");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(blank);
  const [notice, setNotice] = useState("");

  const totalUnits = products.reduce((n, p) => n + Number(p.stock || 0), 0);
  const inventoryValue = products.reduce((sum, p) => sum + Number(p.price || 0) * Number(p.stock || 0), 0);
  const outOfStock = products.filter((p) => Number(p.stock) === 0);
  const lowStock = products.filter((p) => Number(p.stock) > 0 && Number(p.stock) <= 5);
  const categoryCounts = CATEGORIES.filter((c) => c.id !== "all").map((c) => ({
    ...c, count: products.filter((p) => p.category === c.id).length,
  }));
  const maxCount = Math.max(1, ...categoryCounts.map((c) => c.count));
  const rows = useMemo(() => {
    const q = search.trim().toLowerCase();
    return products.filter((p) => category === "all" || p.category === category)
      .filter((p) => !q || `${p.name} ${p.brand}`.toLowerCase().includes(q));
  }, [products, search, category]);

  const openAdd = () => { setEditing(null); setForm(blank); setModal(true); };
  const openEdit = (p) => {
    setEditing(p.id);
    setForm({ name: p.name, brand: p.brand, category: p.category, price: String(p.price), stock: String(p.stock), rating: String(p.rating), badge: p.badge || "", specs: (p.specs || []).join(", ") });
    setModal(true);
  };
  const saveProduct = (e) => {
    e.preventDefault();
    const item = {
      id: editing ?? Math.max(0, ...products.map((p) => Number(p.id))) + 1,
      name: form.name.trim(), brand: form.brand.trim(), category: form.category,
      price: Number(form.price), stock: Number(form.stock), rating: Number(form.rating),
      badge: form.badge.trim(), specs: form.specs.split(",").map((s) => s.trim()).filter(Boolean),
      added: editing ? (products.find((p) => p.id === editing)?.added || 0) : Date.now(),
    };
    if (!item.name || !item.brand || !Number.isFinite(item.price) || item.price < 0 || !Number.isInteger(item.stock) || item.stock < 0 || item.rating < 0 || item.rating > 5) return;
    onProductsChange(editing === null ? [item, ...products] : products.map((p) => p.id === editing ? { ...p, ...item } : p));
    setModal(false); setNotice(editing === null ? "Product added successfully." : "Product updated successfully.");
  };
  const deleteProduct = (id) => {
    if (!window.confirm("Delete this product? This cannot be undone.")) return;
    onProductsChange(products.filter((p) => p.id !== id));
    setNotice("Product deleted.");
  };
  const updateStock = (id, delta) => onProductsChange(products.map((p) => p.id === id ? { ...p, stock: Math.max(0, Number(p.stock) + delta) } : p));
  const stats = [
    ["▦", "Products", products.length, "Across all categories"],
    ["⬡", "Units in stock", totalUnits.toLocaleString(), "Available inventory"],
    ["$", "Inventory value", formatPrice(inventoryValue), "Retail value of stock"],
    ["!", "Low stock", lowStock.length, "Five units or fewer"],
  ];

  const nav = ["Overview", "Products", "Orders", "Customers", "Analytics", "Settings"];
  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-brand"><span className="admin-brand-mark">C</span><span>CORE<span>FORGE</span><small>ADMIN CONSOLE</small></span></div>
        <div className="admin-nav-label">WORKSPACE</div>
        {nav.map((item, i) => <button key={item} className={`admin-nav-item ${section === item ? "active" : ""}`} onClick={() => { setSection(item); setNotice(""); }}>
          <span>{["⌂", "▦", "▤", "♙", "◫", "⚙"][i]}</span>{item}{item === "Products" && <small>{products.length}</small>}
        </button>)}
        <div className="admin-sidebar-bottom"><div className="admin-avatar">{(admin.name || "A").slice(0,1).toUpperCase()}</div><div className="admin-user"><b>{admin.name}</b><small>Administrator</small></div><button title="Log out" onClick={onLogout}>↗</button></div>
      </aside>
      <main className="admin-main">
        <header className="admin-topbar"><div><span className="admin-breadcrumb">CoreForge / </span><b>{section}</b></div><div className="admin-top-actions"><span className="admin-live"><i/> Local demo</span><button className="btn-ghost" onClick={onBack}>↗ View store</button></div></header>
        <div className="admin-content">
          <div className="admin-page-heading"><div><p className="admin-eyebrow">STORE MANAGEMENT</p><h1>{section}</h1><p className="muted">{section === "Overview" ? "Here’s what’s happening with your store today." : `Manage your CoreForge ${section.toLowerCase()} workspace.`}</p></div>
            {section === "Products" && <button className="btn-primary" onClick={openAdd}>＋ Add product</button>}
          </div>
          {notice && <div className="admin-notice">{notice}<button onClick={() => setNotice("")}>×</button></div>}
          {section === "Overview" && <>
            <section className="admin-stat-grid">{stats.map(([icon,label,value,sub]) => <article className="admin-stat" key={label}><div className="admin-stat-top"><span>{label}</span><i>{icon}</i></div><strong>{value}</strong><small>{sub}</small></article>)}</section>
            <section className="admin-overview-grid">
              <article className="admin-panel"><div className="admin-panel-heading"><div><h3>Inventory by category</h3><p>Product distribution across your catalog</p></div><button className="admin-text-btn" onClick={() => setSection("Products")}>View products →</button></div>
                {categoryCounts.map((c) => <div className="admin-bar-row" key={c.id}><span>{c.icon} {c.label}</span><div className="admin-bar-track"><i style={{width:`${c.count/maxCount*100}%`}}/></div><b>{c.count}</b></div>)}
              </article>
              <article className="admin-panel"><div className="admin-panel-heading"><div><h3>Stock alerts</h3><p>Items that may need replenishment</p></div><span className="admin-alert-count">{lowStock.length + outOfStock.length}</span></div>
                {outOfStock.length + lowStock.length === 0 ? <div className="admin-empty">✓ All products are sufficiently stocked.</div> : [...outOfStock, ...lowStock].slice(0,8).map((p) => <div className="admin-alert-row" key={p.id}><span>{p.name}</span><b className={p.stock === 0 ? "is-out" : "is-low"}>{p.stock === 0 ? "Out of stock" : `${p.stock} left`}</b></div>)}
              </article>
            </section>
            <article className="admin-panel"><div className="admin-panel-heading"><div><h3>Recently added products</h3><p>Your latest catalog additions</p></div><button className="admin-text-btn" onClick={() => setSection("Products")}>Manage catalog →</button></div><div className="admin-table-wrap"><table className="admin-table"><thead><tr><th>PRODUCT</th><th>CATEGORY</th><th>PRICE</th><th>STOCK</th><th>RATING</th></tr></thead><tbody>{[...products].sort((a,b)=>(b.added||0)-(a.added||0)).slice(0,6).map(p=><tr key={p.id}><td><div className="admin-product-cell"><ProductImage product={p} className="admin-thumb"/><span><b>{p.name}</b><small>{p.brand}</small></span></div></td><td>{CATEGORIES.find(c=>c.id===p.category)?.label || p.category}</td><td>{formatPrice(p.price)}</td><td><span className={`admin-stock ${p.stock===0?"is-out":p.stock<=5?"is-low":""}`}>{p.stock}</span></td><td>★ {Number(p.rating).toFixed(1)}</td></tr>)}</tbody></table></div></article>
          </>}
          {section === "Products" && <article className="admin-panel"><div className="admin-toolbar"><div><h3>Product catalog <span>{rows.length}</span></h3><p>Search, update, and organize your inventory.</p></div><div className="admin-filters"><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search products or brands…"/><select value={category} onChange={e=>setCategory(e.target.value)}>{CATEGORIES.map(c=><option value={c.id} key={c.id}>{c.label}</option>)}</select></div></div>
            <div className="admin-table-wrap"><table className="admin-table"><thead><tr><th>PRODUCT</th><th>CATEGORY</th><th>PRICE</th><th>STOCK</th><th>RATING</th><th>ACTIONS</th></tr></thead><tbody>{rows.map(p=><tr key={p.id}><td><div className="admin-product-cell"><ProductImage product={p} className="admin-thumb"/><span><b>{p.name}</b><small>{p.brand}</small></span></div></td><td>{CATEGORIES.find(c=>c.id===p.category)?.label || p.category}</td><td>{formatPrice(p.price)}</td><td><div className="admin-stock-control"><button onClick={()=>updateStock(p.id,-1)} disabled={p.stock<=0}>−</button><span className={`admin-stock ${p.stock===0?"is-out":p.stock<=5?"is-low":""}`}>{p.stock}</span><button onClick={()=>updateStock(p.id,1)}>＋</button></div></td><td>★ {Number(p.rating).toFixed(1)}</td><td><div className="admin-row-actions"><button onClick={()=>openEdit(p)}>Edit</button><button className="delete" onClick={()=>deleteProduct(p.id)}>Delete</button></div></td></tr>)}</tbody></table>{rows.length===0&&<div className="admin-empty">No products match your search.</div>}</div>
          </article>}
          {section === "Orders" && <article className="admin-panel admin-placeholder"><span>▤</span><h3>Order management is ready for integration</h3><p>This project currently has no checkout backend or order database, so real orders cannot be displayed yet. Connect an API or database to enable order processing, statuses, and customer receipts.</p></article>}
          {section === "Customers" && <article className="admin-panel admin-placeholder"><span>♙</span><h3>Customer records are not connected</h3><p>Customer profiles will appear here once the store has a customer account system and a persistent database.</p></article>}
          {section === "Analytics" && <><section className="admin-stat-grid">{[["Catalog size",products.length],["Units available",totalUnits],["Out of stock",outOfStock.length],["Stock health",`${products.length ? Math.round((products.length-outOfStock.length)/products.length*100) : 0}%`]].map(([l,v])=><article className="admin-stat" key={l}><div className="admin-stat-top"><span>{l}</span></div><strong>{v}</strong><small>Based on current local inventory</small></article>)}</section><article className="admin-panel"><div className="admin-panel-heading"><div><h3>Category performance</h3><p>Number of products in each category</p></div></div>{categoryCounts.map(c=><div className="admin-bar-row" key={c.id}><span>{c.label}</span><div className="admin-bar-track"><i style={{width:`${c.count/maxCount*100}%`}}/></div><b>{c.count}</b></div>)}</article></>}
          {section === "Settings" && <article className="admin-panel admin-settings"><h3>Store settings</h3><p>Account: <b>{admin.email}</b></p><p>Storage: <b>Browser local storage</b></p><p className="muted">Changes are saved in this browser and are not shared with other devices.</p><div className="admin-settings-actions"><button className="btn-ghost" onClick={()=>{if(window.confirm("Restore the original sample catalog? Your product changes will be lost.")){onProductsChange(initialProducts);setNotice("Original sample catalog restored.");}}}>Restore sample catalog</button><button className="btn-primary" onClick={onLogout}>Sign out</button></div></article>}
        </div>
      </main>
      {modal && <div className="admin-modal-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)setModal(false);}}><form className="admin-modal" onSubmit={saveProduct}><div className="admin-modal-head"><div><p className="admin-eyebrow">CATALOG</p><h2>{editing===null?"Add product":"Edit product"}</h2></div><button type="button" onClick={()=>setModal(false)}>×</button></div>
        <div className="admin-form-grid"><label>Product name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></label><label>Brand<input required value={form.brand} onChange={e=>setForm({...form,brand:e.target.value})}/></label><label>Category<select value={form.category} onChange={e=>setForm({...form,category:e.target.value})}>{CATEGORIES.filter(c=>c.id!=="all").map(c=><option key={c.id} value={c.id}>{c.label}</option>)}</select></label><label>Price<input required type="number" min="0" step="0.01" value={form.price} onChange={e=>setForm({...form,price:e.target.value})}/></label><label>Stock quantity<input required type="number" min="0" step="1" value={form.stock} onChange={e=>setForm({...form,stock:e.target.value})}/></label><label>Rating (0–5)<input required type="number" min="0" max="5" step="0.1" value={form.rating} onChange={e=>setForm({...form,rating:e.target.value})}/></label><label>Badge (optional)<input value={form.badge} onChange={e=>setForm({...form,badge:e.target.value})}/></label><label>Specifications <small>Separate with commas</small><input value={form.specs} onChange={e=>setForm({...form,specs:e.target.value})}/></label></div>
        <div className="admin-modal-actions"><button type="button" className="btn-ghost" onClick={()=>setModal(false)}>Cancel</button><button className="btn-primary" type="submit">{editing===null?"Create product":"Save changes"}</button></div>
      </form></div>}
    </div>
  );
}
