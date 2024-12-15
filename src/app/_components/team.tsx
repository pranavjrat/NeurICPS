"use client";

import React from "react";
import Image from "next/image";

// Import data
import { teamMembers } from "lib/data";

export default function Team() {
  return (
    <div className="relative flex flex-col items-center px-4 sm:px-6 md:mx-16 lg:mx-36" id="team">
      {/* Section Heading */}
      <h2 className="mb-8 text-xl sm:text-2xl font-medium capitalize text-blue-600">
        Meet Our Team
      </h2>

      {/* Carousel Container */}
      <div className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto px-2 sm:px-4 py-4 sm:py-6 scrollbar-hide">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg bg-gray-100 p-4 shadow-md transition-transform duration-300 hover:scale-105"
          >
            {/* Image */}
            <div className="relative h-32 w-32 sm:h-40 sm:w-40 md:h-28 md:w-28">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                className="rounded-full object-cover"
              />
            </div>

            {/* Name and Designation */}
            <h3 className="mt-4 text-base sm:text-lg font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">{member.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

