"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Route } from "next";
import clsx from "clsx/lite";

import "./styles.css";

const routes: { path: Route; label: string }[] = [
  { path: "/", label: "Home" },
  { path: "/popover", label: "Popover" },
  { path: "/modal", label: "Modal" },
];

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      {routes.map(({ path, label }) => (
        <Link
          href={path}
          className={clsx("link", pathname === path && "is-active")}
          key={path}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
