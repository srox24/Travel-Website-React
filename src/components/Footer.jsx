import "../styles/footer.css";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="upper">
        <div>
          <h1>Traveller</h1>
          <p>Choose your favourite destination</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="lower">
        <div>
        <h4>Project</h4>
        <a href="/">Changelog</a>
        <a href="/">Status</a>
        <a href="/">License</a>
        <a href="/">All Version</a>
        </div>
        <div>
        <h4>Community</h4>
        <a href="/">Github</a>
        <a href="/">Issues</a>
        <a href="/">Project</a>
        <a href="/">Twitter</a>
        </div>
        <div>
        <h4>Help</h4>
        <a href="/">Support</a>
        <a href="/">Troubleshoot</a>
        <a href="/">Contact Us</a>
        </div>
        <div>
        <h4>Others</h4>
        <a href="/">Terms of Services</a>
        <a href="/">Privacy Policy</a>
        <a href="/">License</a>
        
        </div>
      </div>
    </div>
  );
};

export default Footer;
