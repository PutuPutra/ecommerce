import React from "react";
import { ShoppingCartIcon, UserIcon } from "lucide-react";
import Link from "next/link";

export default function menu() {
  return (
    <>
      <div className="flex justify-end">
        <nav className="flex gap-3 w-full">
          <Link prefetch={false} href={"/signin"} className="header-button">
            <UserIcon className="h-8 w-8" />
            <span className="font-bold">Sign In</span>
          </Link>
          <Link prefetch={false} href={"/cart"} className="header-button">
            <ShoppingCartIcon className="h-8 w-8" />
            <span className="font-bold">Cart</span>
          </Link>
        </nav>
      </div>
    </>
  );
}
