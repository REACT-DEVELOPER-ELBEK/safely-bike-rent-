import React from "react";
import '../../pages/normalize/Normalize.scss'
import './Footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__wrapper">
          <h1>safely</h1>
          <div className="footer__links">
            <div className="footer__link">
              <h2>About</h2>
              <a>company</a>
              <a>community</a>
              <a>carrers</a>
            </div>
            <div className="footer__link">
              <h2>Products</h2>
              <a>models</a>
              <a>stores</a>
              <a>services</a>
            </div>
            <div className="footer__link">
              <h2>Support</h2>
              <a>contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
