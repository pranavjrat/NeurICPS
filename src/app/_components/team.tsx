"use client";

import React from "react";
import Image from "next/image";

// Import data
import { teamMembers, externalMembers } from "lib/data";

export default function Team() {
  return (
    <section id="team" className="relative mx-4 my-16 flex flex-col items-center md:mx-11 md:my-32">
      {/* Section Heading */}
      <h2 className="mb-8 text-2xl font-medium capitalize text-blue-600 md:text-3xl">
        Meet Our Team
      </h2>

      {/* Main Layout */}
      <div className="flex flex-col gap-8 md:flex-row md:gap-16">
        {/* Team Members - 2/3 Space */}
        <div className="md:w-2/3">
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
                <h3 className="mt-4 text-lg font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.designation}</p>
              </div>
            ))}
          </div>
        </div>

        {/* External Members - 1/3 Space */}
        <div className="md:w-1/3">
          <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">External Members</h3>
            <ul className="w-full list-disc pl-5 text-gray-700">
              {externalMembers.map((member, index) => (
                <li key={index} className="mb-2 text-sm font-medium md:text-base">
                  {member.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

