"use client";

import React from "react";
import Image from "next/image";

// Import data
import { teamMembers, teamMembersExternal } from "lib/data";

export default function Team() {
  return (
    <div
      className="relative flex flex-col items-center px-4 sm:px-6 md:mx-16 lg:mx-36"
      id="team"
    >
      {/* Section Heading */}
      <h2 className="mb-8 text-xl font-medium capitalize text-blue-600 sm:text-2xl">
        Meet Our Team
      </h2>

      <h2 className="mb-6 text-sm font-semibold text-gray-800 md:text-lg">
        Internal
      </h2>

      {/* Carousel Container */}
      <div className="scrollbar-hide flex gap-4 overflow-x-auto px-2 py-4 sm:gap-6 sm:px-4 sm:py-6 md:gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg bg-gray-100 p-4 shadow-md transition-transform duration-300 hover:scale-105"
          >
            {/* Image with Link */}
            <a href={member.link} target="_blank" rel="noopener noreferrer">
              <div className="relative h-32 w-32 sm:h-40 sm:w-40 md:h-28 md:w-28">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  className="rounded-full object-cover"
                />
              </div>
            </a>

            {/* Name and Designation */}
            <h3 className="mt-4 text-base font-semibold text-gray-800 sm:text-lg">
              {member.name}
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm">
              {member.designation}
            </p>
          </div>
        ))}
      </div>

      <h2 className="mb-6 text-sm font-semibold text-gray-800 md:text-lg">
        External
      </h2>

      {/* Carousel Container */}
      <div className="scrollbar-hide flex gap-4 overflow-x-auto px-2 py-4 sm:gap-6 sm:px-4 sm:py-6 md:gap-8">
        {teamMembersExternal.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg bg-gray-100 p-4 shadow-md transition-transform duration-300 hover:scale-105"
          >
            {/* Image with Link */}
            <a href={member.link} target="_blank" rel="noopener noreferrer">
              <div className="relative h-32 w-32 sm:h-40 sm:w-40 md:h-28 md:w-28">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  className="rounded-full object-cover"
                />
              </div>
            </a>

            {/* Name and Designation */}
            <h3 className="mt-4 text-base font-semibold text-gray-800 sm:text-lg">
              {member.name}
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm">
              {member.designation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

