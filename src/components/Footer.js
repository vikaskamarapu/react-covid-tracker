import React from "react";

function Footer() {
  return (
    <footer className="bg-light text-center">
      <div className="wrapper mt-3 py-5">
        <small>
          @2022 <strong>Covid Tracker</strong>, All Rights Reserved
        </small>
        <nav className="footer-nav">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;