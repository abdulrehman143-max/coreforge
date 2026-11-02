import React, { useState } from "react";
import { registerAdmin } from "./adminAuth";

export default function AdminRegister({ onGoLogin, onBack }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) return setError("Password must be at least 6 characters.");
    if (password !== confirm) return setError("Passwords do not match.");

    const err = registerAdmin(name.trim(), email.trim(), password);
    if (err) return setError(err);
    onGoLogin(); // registered - go to login page
  };

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Admin Registration</h2>
        <p className="muted">Create an admin account for CoreForge.</p>

        <label>Full name
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <label>Confirm password
          <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} required />
        </label>

        {error && <p className="auth-error">{error}</p>}

        <button className="btn-primary" type="submit">Register</button>
        <p className="muted">
          Already an admin? <button type="button" className="link-btn" onClick={onGoLogin}>Login</button>
        </p>
        <button type="button" className="link-btn" onClick={onBack}>← Back to store</button>
      </form>
    </div>
  );
}
