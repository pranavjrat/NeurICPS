"use client";

import React from "react";
import Image from "next/image";

// Import data
import { teamMembers } from "lib/data";

export default function Team() {
  return (
    <div className="mx-36 relative flex flex-col items-center" id="team">
      {/* Section Heading */}
      <h2 className="mb-8 text-2xl font-medium capitalize text-blue-600">
        Meet Our Team
      </h2>

      {/* Carousel Container */}
      <div className="flex gap-4 overflow-x-auto px-4 py-6 scrollbar-hide md:gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg bg-gray-100 p-4 shadow-md transition-transform duration-300 hover:scale-105"
          >
            {/* Image */}
            <div className="relative h-40 w-40 md:h-52 md:w-52">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                className="rounded-full object-cover"
              />
            </div>

            {/* Name and Designation */}
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-sm text-gray-600">{member.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

