import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav>
      <div className="navbar justify-between bg-base-300">
        <Link href="/" className="btn btn-ghost text-lg">
          FurniFlex
        </Link>
        <ul className="flex">
          <li>
            <Link href="/cart" className="btn btn-ghost rounded-btn">
              cart
            </Link>
          </li>

          <li>
            <Link href="/signin" className="btn btn-ghost rounded-btn">
              signin
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Header;
