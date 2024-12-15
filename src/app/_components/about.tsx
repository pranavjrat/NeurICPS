"use client";

import { messages } from "lib/data";
import React from "react";
import Image from "next/image"; // Import Image component
import { motion } from "framer-motion"; // Import Framer Motion

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto my-16 scroll-mt-28 text-lg px-4 md:mx-11 md:my-32 md:text-xl bg-gray-50 rounded-lg shadow-lg"
    >
      {/* Section Heading */}
      <div className="flex flex-col gap-8 md:flex-row md:gap-16">
        {/* Left Side: Messages */}
        <div className="p-11 w-full md:w-1/2">
          <h2 className="mb-8 text-center text-3xl font-semibold text-blue-600 md:text-4xl">
            About Us
          </h2>
          <p className="text-lg text-gray-700 md:text-xl mb-6">
            Jaypee University of Information Technology is situated in Waknaghat, Himachal Pradesh.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 md:text-3xl mb-4">Mission</h2>

          {/* Loop through messages and display each in a box */}
          <div className="grid grid-cols-1 gap-6">
            {messages.map((message, index) => (
              <div
                key={index}
                className="rounded-lg border bg-gray-50 p-5 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-gray-600">{message}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image with Overlayed Box */}
        <div className="relative w-full md:w-1/2">
          {/* Full-Width Image with Animation */}
          <motion.div
            className="relative w-full"
            initial={{ opacity: 0, scale: 0.9 }} // Initial state
            animate={{ opacity: 1, scale: 1 }} // Final state
            transition={{ duration: 0.8, ease: "easeOut" }} // Transition details
          >
            <Image
              src="/juit.jpg" // Replace with your image path
              alt="Our Vision"
              layout="responsive"
              width={1920}
              height={1080}
              className="rounded-lg object-cover"
            />
          </motion.div>

          {/* Overlayed Box */}
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <motion.div
              className="w-full max-w-md rounded-lg bg-white bg-opacity-90 p-6 text-center shadow-lg md:p-8"
              initial={{ opacity: 0, y: 20 }} // Slide-up animation
              animate={{ opacity: 1, y: 0 }} // Final position
              transition={{ delay: 0.5, duration: 0.6 }} // Delayed transition
            >
              <h3 className="text-xl font-bold text-gray-800 md:text-3xl">
                Vision
              </h3>
              <p className="mt-2 text-sm text-gray-600 md:text-lg">
                To be a globally recognized center of repute in AI-based IP-enabled interconnected embedded edge
                computing systems for research, innovation, and education.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

