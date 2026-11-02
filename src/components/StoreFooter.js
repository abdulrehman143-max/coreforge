import React from "react";

export default function StoreFooter() {
  return (
    <footer className="store-footer">
      <div className="footer-inner">
        <div>
          <strong>CoreForge</strong>
          <p className="muted">PC hardware, prebuilt gaming rigs and accessories.</p>
        </div>
        <div className="muted">
          © {new Date().getFullYear()} CoreForge. Demo store - prices and stock are sample data.
        </div>
      </div>
    </footer>
  );
}
