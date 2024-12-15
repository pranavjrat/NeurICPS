import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-32 bg-white lg:grid lg:grid-cols-5">
      <div className="relative block h-32 lg:col-span-2 lg:h-full">
        {/* Replace with the college logo */}
        <Image
          src="/juit.jpg" // Replace with your logo path
          alt="Logo"
          layout="fill"
          className="absolute inset-0 h-full w-full object-cover"
        />{" "}
      </div>

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span className="text-xs uppercase tracking-wide text-gray-500">
                {" "}
                Call us{" "}
              </span>
              <a
                href="tel:01792257999"
                className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl"
              >
                01792-257-999
              </a>
              <p className="text-sm">Waknaghat, P.O. Waknaghat, Teh Kandaghat, Distt. Solan PIN-173 234 (H.P.), India</p>
            </p>

            <ul className="mt-8 space-y-1 text-sm text-gray-700"></ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="justify-end font-medium text-gray-900">
                Quick Links
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="https://www.juit.ac.in/" 
                    className="text-gray-700 transition hover:opacity-75">
                    {" "}
                    About Us{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.juit.ac.in/contact/address"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Contact{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="https://nmicps.in/"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    NMICPS{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
