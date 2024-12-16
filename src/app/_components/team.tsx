"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion from framer-motion

// Import data
import { teamMembers, teamMembersExternal } from "lib/data";

export default function Team() {
  return (
    <div
      className="relative flex flex-col items-center px-4 sm:px-6 md:mx-16 lg:mx-36"
      id="team"
    >
      {/* Section Heading */}
      <motion.h2
        className="mb-8 text-xl font-medium capitalize text-blue-600 sm:text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Meet Our Team
      </motion.h2>

      <motion.h2
        className="mb-6 text-sm font-semibold text-gray-800 md:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Internal
      </motion.h2>

      {/* Carousel Container */}
      <motion.div
        className="scrollbar-hide flex gap-4 overflow-x-auto px-2 py-4 sm:gap-6 sm:px-4 sm:py-6 md:gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center rounded-lg bg-gray-100 p-4 shadow-md transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
          >
            {/* Image with Link */}
            <a href={member.link} target="_blank" rel="noopener noreferrer">
              <div className="relative h-32 w-32 sm:h-40 sm:w-40 md:h-28 md:w-28">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  className="rounded-full object-cover mt-4"
                />
              </div>
            </a>

            {/* Name and Designation */}
            <motion.h3
              className="mt-4 text-base font-semibold text-gray-800 sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            >
              {member.name}
            </motion.h3>
            <motion.p
              className="text-xs text-gray-600 sm:text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            >
              {member.designation}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      <motion.h2
        className="mb-6 text-sm font-semibold text-gray-800 md:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        External
      </motion.h2>

      {/* Carousel Container */}
      <motion.div
        className="scrollbar-hide flex gap-4 overflow-x-auto px-2 py-4 sm:gap-6 sm:px-4 sm:py-6 md:gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        {teamMembersExternal.map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center rounded-lg bg-gray-100 p-4 shadow-md transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
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
            <motion.h3
              className="mt-4 text-base font-semibold text-gray-800 sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            >
              {member.name}
            </motion.h3>
            <motion.p
              className="text-xs text-gray-600 sm:text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            >
              {member.designation}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

