import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const linkProps = { onClick: scrollToTop };

  return (
    <footer id="footer" className="footer">
      <div className="footer-inner">
        <div className="footer-column">
          <div className="footer-logo">
            <div className="logo-icon"><img src={logo} alt="BVM Security Logo" /></div>
            <span className="logo-text">
              B.V.M<span>Security</span>
            </span>
          </div>
          <p className="footer-text">
            Protecting what matters most. Your trusted partner in comprehensive
            security solutions since 2010.
          </p>
          <div className="footer-social">
            <span className="social-icon">f</span>
            <span className="social-icon">t</span>
            <span className="social-icon">in</span>
            <span className="social-icon">ig</span>
          </div>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Quick Links</h4>
          <ul>
            <li>
              <Link to="/" {...linkProps}>Home</Link>
            </li>
            <li>
              <Link to="/about" {...linkProps}>About Us</Link>
            </li>
            <li>
              <Link to="/services" {...linkProps}>Services</Link>
            </li>
            <li>
              <Link to="/gallery" {...linkProps}>Gallery</Link>
            </li>
            <li>
              <Link to="/contact" {...linkProps}>Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Our Services</h4>
          <ul>
            <li>Bouncer Security</li>
            <li>Security Guards</li>
            <li>House Keeping</li>
            <li>Personal Security Officer</li>
            <li>Driver</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Contact Info</h4>
          <ul>
            <li>GF, Shop no. 1, S.T.B Chowk, Sneh Vihar, Sohna Road, Bhondsi, Gurugram - 122001</li>
            <li>+91 8851481867</li>
            <li>bvm70311@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 BVM Security Services. All rights reserved.</span>
        <div className="footer-bottom-links">
          <a href="#" onClick={scrollToTop}>Privacy Policy</a>
          <a href="#" onClick={scrollToTop}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
