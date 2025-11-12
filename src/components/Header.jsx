import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <header className="site-header">
      <div className="container header__row">
        {/* Make the brand clickate so people can return to home anytime.*/}
        <button
          onClick={scrollToTop}
          className="brand btn--link"
          style={{
            // Clearing design on css
            background: "none",
            border: "none",
            color: "inherit",
            font: "inherit",
            cursor: "pointer",
          }}
        >
          CWI Recharge Basin ROI
        </button>

        <nav className="nav" aria-label="Primary">
          <button
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="navMenu"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
          <ul id="navMenu" className={`nav__list ${open ? "is-open" : ""}`}>
            <li>
              <a href="#problem">About the problem</a>
            </li>
            <li>
              <a href="#solution">About the solution</a>
            </li>
            <li>
              <a href="#roi">Find your ROI</a>
            </li>
            <li>
              <a href="#results">Results</a>
            </li>
            <li>
              <a href="#about-cwi">About CWI</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
