import React from "react";

// Placeholder page shown after a successful admin login.
export default function AdminHome({ admin, onLogout, onBack }) {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Welcome, {admin.name} 👋</h2>
        <p className="muted">Logged in as {admin.email}</p>
        <button className="btn-primary" onClick={onBack}>Go to store</button>
        <button className="btn-ghost" onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
}
