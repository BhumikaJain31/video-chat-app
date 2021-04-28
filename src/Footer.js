import React from "react";
import './Footer.css';

const name = "Bhumika Jain";
const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer bottom-0 ">
      <p>
        Created by {year} @{name}
      </p>
    </footer>
  );
};

export default Footer;
