import React from "react";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer>
      <p>
        <p>Copyright {date}</p>
      </p>
    </footer>
  );
}

export default Footer;
