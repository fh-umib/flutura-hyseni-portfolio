"use client";

import { useState } from "react";

const navigationItems = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Contact", "#contact"],
] as const;

export default function PortfolioNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-inner" aria-label="Main navigation">
        <a className="brand" href="#about" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            FH
          </span>
          <span>Flutura Hyseni</span>
        </a>

        <ul id="mobile-navigation" className="nav-links" data-open={menuOpen}>
          {navigationItems.map(([label, href]) => (
            <li key={label}>
              <a href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-controls">
          <a
            className="icon-button code-link"
            href="#projects"
            onClick={() => setMenuOpen(false)}
            aria-label="View projects"
            title="View projects"
          >
            <span aria-hidden="true">&lt;/&gt;</span>
          </a>
          <button
            className="icon-button menu-toggle"
            type="button"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? (
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}