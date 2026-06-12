import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            <span className="logo-tech">Levy</span>
            <span className="logo-rift">Kiprotich</span>
          </div>
          <p className="footer-desc">
            Building modern web experiences. Feel free to connect with me.
          </p>
          <div className="footer-socials">
            <a href="https://github.com/Itslevy44" className="footer-social" target="_blank" rel="noreferrer">GH</a>
            <a href="https://www.linkedin.com/in/levy-kiprotich-2b478534a/" className="footer-social" target="_blank" rel="noreferrer">LI</a>
            <a href="#" className="footer-social">TW</a>
          </div>
          <p className="footer-desc">
            Also designed by <a href="https://techrift-system.vercel.app/" target="_blank" rel="noreferrer">Techrift Software Solutions</a>
          </p>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Levy Kiprotich. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
