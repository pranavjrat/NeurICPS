'use client';

import { links } from 'lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const TopNav = () => {
  const pathname = usePathname();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null); // Specify type explicitly

  return (
    <nav className="bg-white shadow fixed w-full top-0 left-0 z-50">
      <div className="mx-auto grid max-w-screen-lg grid-cols-3 items-center p-4">
        {/* Logo on the left */}
        <div className="flex justify-start p-0 m-0">
          <Link href="/">
            <Image
              src="/nicps.jpg" // Replace with your logo path
              alt="Logo"
              width={56}  // Width in pixels
              height={56} // Height in pixels
              className="object-contain"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex justify-center text-gray-800 gap-16">
          {links.map((link) => {
            const isActive = pathname === link.href || pathname.includes(link.href);

            return (
              <li
                key={link.href}
                className={clsx(
                  'group relative hover:text-blue-600 h-3/4 flex items-center justify-center whitespace-nowrap',
                  {
                    'text-blue-600': isActive,
                  }
                )}
                onMouseEnter={() => setHoveredLink(link.href)}  // Track which link is hovered
                onMouseLeave={() => setHoveredLink(null)}  // Reset hover state
              >
                <Link href={link.href}>
                  {link.name}
                </Link>

                {/* Dropdown Menu */}
                {link.subLinks && (
                  <div
                    className={clsx(
                      'absolute left-0 top-full mt-2 w-64 bg-white shadow-md rounded-lg z-10', // Increased width to w-64
                      {
                        'block': hoveredLink === link.href, // Show dropdown when hovered
                        'hidden': hoveredLink !== link.href, // Hide dropdown otherwise
                      }
                    )}
                  >
                    <ul className="py-4 px-4 text-sm text-gray-700 dark:text-gray-200"> {/* Increased padding */}
                      {link.subLinks.map((subLink, index) => (
                        <li key={index}>
                          <Link
                            href={subLink.href}
                            className="block py-3 px-6 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
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
        <div></div>
      </div>
    </nav>
  );
};

export default TopNav;

