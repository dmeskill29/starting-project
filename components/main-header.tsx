import Link from "next/link";
import React from "react";

const MainHeader = () => {
  return (
    <header>
      <Link href="/">NextLevel Food</Link>
      <nav>
        <ul>
          <li>
            <Link href="/community">Community</Link>
          </li>
          <li>
            <Link href="/meals">Meals</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
