import React, { ReactElement } from 'react';
import Link from 'next/link';

function Nav(): ReactElement {
  return (
    <nav>
      <Link href="/sell">Sell</Link>
      <Link href="/products">Products</Link>
      <Link href="/orders">Orders</Link>
      <Link href="/account">Account</Link>
    </nav>
  );
}

export default Nav;
