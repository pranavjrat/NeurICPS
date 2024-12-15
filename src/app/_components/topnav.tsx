"use client";

import { links } from "lib/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const TopNav = () => {
  const pathname = usePathname();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage hamburger menu

  return (
    <nav className="navbar fixed left-0 top-0 z-50 w-full bg-white shadow">
      <div className="mx-auto grid max-w-screen-lg grid-cols-3 items-center p-4">
        {/* Hamburger Menu (Visible only on small screens) */}
        <div className="flex justify-start md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {/* Logo on the center */}
        <div className="justify-left m-0 flex p-0">
          <Link href="/">
            <Image
              src="/nicps.jpg" // Replace with your logo path
              alt="Logo"
              width={56}
              height={56}
              className="object-contain"
            />
          </Link>
        </div>
        {/* Navigation Links (Visible only on larger screens) */}
        <ul className="hidden justify-end gap-16 text-gray-800 md:flex">
          {links.map((link) => {
            const isActive =
              pathname === link.href || pathname.includes(link.href);

            return (
              <li
                key={link.href}
                className={clsx(
                  "group relative flex h-3/4 items-center justify-center whitespace-nowrap hover:text-blue-600",
                  {
                    "text-blue-600": isActive,
                  },
                )}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Link href={link.href}>{link.name}</Link>

                {/* Dropdown Menu */}
                {link.subLinks && (
                  <div
                    className={clsx(
                      "absolute left-0 top-full z-10 mt-2 w-64 rounded-lg bg-white shadow-md",
                      {
                        block: hoveredLink === link.href,
                        hidden: hoveredLink !== link.href,
                      },
                    )}
                  >
                    <ul className="justify-center px-4 py-4 text-sm text-gray-700 dark:text-gray-200">
                      {link.subLinks.map((subLink, index) => (
                        <li key={index}>
                          <Link
                            href={subLink.href}
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            {subLink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
        {/* Empty placeholder to align logo and links */}
        <div className="justify-end flex p-0 m-0 navbar-logo">
          <Link href="https://www.juit.ac.in/">
            <Image
              src="/juit.png" // Replace with your logo path
              alt="JUIT Logo"
              width={224} // Increased size
              height={224} // Increased size
              className="object-contain"
            />
          </Link>
        </div>{" "}
      </div>

      {/* Hamburger Menu Links (Visible only on small screens) */}
      {isMenuOpen && (
        <div className="absolute left-0 top-16 z-20 w-64 rounded-lg bg-white shadow-md md:hidden">
          <ul className="px-4 py-4 text-sm text-gray-700">
            {links.map((link) => (
              <li key={link.href} className="py-2">
                <Link
                  href={link.href}
                  className="block text-gray-700 hover:bg-gray-100"
                >
                  {link.name}
                </Link>
                {/* Sub Links */}
                {link.subLinks && (
                  <ul className="pl-4">
                    {link.subLinks.map((subLink, index) => (
                      <li key={index}>
                        <Link
                          href={subLink.href}
                          className="block py-2 text-gray-600 hover:bg-gray-100"
                        >
                          {subLink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default TopNav;
