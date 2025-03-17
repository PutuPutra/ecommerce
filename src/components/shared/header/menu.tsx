import React from "react";
import Link from "next/link";
import CartButton from "./cart-button";

export default function menu() {
  return (
    <>
      <div className="flex justify-end">
        <nav className="flex gap-3 w-full">
          <Link
            prefetch={false}
            href={"/signin"}
            className="header-button flex items-center header-button"
          >
            Hello, Sign in
          </Link>
          {/* <Link prefetch={false} href={"/signin"} className="header-button">
            <UserIcon className="h-8 w-8" />
            <span className="font-bold">Sign In</span>
          </Link> */}
          {/* <Link prefetch={false} href={"/cart"} className="header-button">
            <ShoppingCartIcon className="h-8 w-8" />
            <span className="font-bold">Cart</span>
          </Link> */}
          {/* <Link prefetch={false} href={"/cart"} className="header-button">
            <div className="flex items-end">
              <ShoppingCartIcon className="h-8 w-8" />
              Cart
            </div>
          </Link> */}
          <CartButton />
        </nav>
      </div>
    </>
  );
}
