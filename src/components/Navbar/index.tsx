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
  { path: "/hover", label: "Hover" },
];

// https://github.com/maurer2/trickle-down-features/blob/main/src/components/GoBackLink/GoBackLink.svelte
// const pageURLPattern = new URLPattern({
//   pathname: ":page{/*}?", // optional trailing slash and optional nested paths.
// });
// const isHome = pageURLPattern.test({ pathname: path.slice(1) })

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      {routes.map(({ path, label }) => {
        const isActive =
          path === "/" ? pathname === path : pathname.startsWith(path);

        return (
          <Link
            href={path}
            className={clsx("link")}
            key={path}
            aria-current={isActive ? "page" : undefined}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

export default Navbar;
