import Image from "next/image";
import React from "react";
import Link from "next/link";

const PhD = () => {
  return (
    <div className="wrapper mx-auto max-w-6xl bg-gray-100 p-6 antialiased">
      <div className="flex flex-col gap-6 rounded-xl bg-white p-6 shadow-lg sm:flex-row sm:items-start">
        {/* Image */}
        <Link href="/payal-thakur-phd.pdf">
          <div className="relative h-64 w-64 cursor-pointer overflow-hidden rounded-lg shadow-md sm:h-72 sm:w-72 hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image
              src="/payal-thakur.jpg" // Image stored in the public folder
              alt="Payal Thakur"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </Link>

        {/* Card Content */}
        <div className="flex flex-col justify-center">
          {/* Title */}
          <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">
            Ph.D. Thesis
          </h2>
          <p className="mt-2 text-gray-600">
            Stochastic Neuromorphic Cyber Physical System Designs
          </p>

          {/* Button */}
          <Link href="/payal-thakur-phd.pdf" legacyBehavior>
            <a className="mt-6 inline-block w-max rounded-lg bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-teal-600 transition-colors duration-300">
              View
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhD;

