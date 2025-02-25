import React from "react";
import styles from "./Footer.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; {new Date().getFullYear()} Travel Guide. All Rights Reserved.</p>
        <p>© 2025</p>
        <ul>
          <li>
            <a href="/Contact Us" className={styles.link}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
