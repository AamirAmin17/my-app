import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul className="navbar-ul">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/product">Product</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/discounts">Discounts</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
