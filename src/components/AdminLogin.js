import React, { useState } from "react";
import { loginAdmin } from "./adminAuth";

export default function AdminLogin({ onSuccess, onGoRegister, onBack }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = loginAdmin(email.trim(), password);
    if (err) return setError(err);
    onSuccess(); // logged in
  };

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>
        <p className="muted">Sign in to manage CoreForge.</p>

        <label>Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>

        {error && <p className="auth-error">{error}</p>}

        <button className="btn-primary" type="submit">Login</button>
        <p className="muted">
          Need an account? <button type="button" className="link-btn" onClick={onGoRegister}>Register</button>
        </p>
        <button type="button" className="link-btn" onClick={onBack}>← Back to store</button>
      </form>
    </div>
  );
}
