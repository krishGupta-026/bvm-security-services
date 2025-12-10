import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  // hide / show + mark as scrolled
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // hide when scrolling down
      if (currentScroll > lastScrollY.current && currentScroll > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      // add "navbar-scrolled" after some offset
      setScrolled(currentScroll > 50);

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close mobile menu when clicking outside
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event) => {
      const menuEl = menuRef.current;
      const toggleEl = toggleRef.current;

      if (
        menuEl &&
        !menuEl.contains(event.target) &&
        toggleEl &&
        !toggleEl.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleClick = () => {
    setOpen(false);
    scrollToTop();
  };

  const navLinkClass = ({ isActive }) =>
    "nav-link" + (isActive ? " nav-link-active" : "");

  return (
    <header
      className={
        "navbar-wrapper" +
        (hidden ? " navbar-hidden" : "") +
        (scrolled ? " navbar-scrolled" : "")
      }
    >
      <div className="navbar">
        <Link to="/" className="nav-logo" onClick={handleClick}>
          <img src={logo} alt="BVM Security Logo" className="logo-img" />
          <div className="logo-text">
            <span className="logo-bold">BVM</span>
            <span className="logo-light">Security Services</span>
          </div>
        </Link>

        <button
          ref={toggleRef}
          className="nav-toggle"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          ref={menuRef}
          className={"nav-menu" + (open ? " nav-menu-open" : "")}
        >
          <NavLink to="/" className={navLinkClass} onClick={handleClick}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={handleClick}>
            About Us
          </NavLink>
          <NavLink
            to="/services"
            className={navLinkClass}
            onClick={handleClick}
          >
            Services
          </NavLink>
          <NavLink to="/gallery" className={navLinkClass} onClick={handleClick}>
            Gallery
          </NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={handleClick}>
            Contact Us
          </NavLink>

          <Link
            to="/contact"
            className="btn btn-nav nav-hoverable"
            onClick={handleClick}
          >
            Get Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
