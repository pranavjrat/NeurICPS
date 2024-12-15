"use client";

import { messages } from "lib/data";
import React from "react";
import Image from "next/image"; // Import Image component
import { motion } from "framer-motion"; // Import Framer Motion

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto scroll-mt-28 text-lg px-4 md:px-8 lg:px-16 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 rounded-lg shadow-xl"
    >
      {/* Section Heading */}
      <div className="flex flex-col gap-8 md:flex-row md:gap-16">
        {/* Left Side: Messages (2/3 width) */}
        <div className="p-6 md:p-12 w-full md:w-2/3">
          <h2 className="mb-6 text-center text-3xl font-semibold text-blue-600 md:text-4xl leading-tight">
            About Us
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 md:text-xl mb-6 leading-relaxed">
            The Neuromorphic Interdisciplinary Cyber Physical Centre at Jaypee University of Information Technology, Waknaghat, stands as a pioneering Centre of Excellence, dedicated to advancing transformative research and development in cyber-physical systems. With a strong focus on interdisciplinary collaboration, the Centre brings together visionary minds from academia, industry, and research communities to generate world-class ideas and convert them into tangible solutions. By leveraging cutting-edge technologies, state-of-the-art infrastructure, and strategic global partnerships, this Centre aims to spearhead innovation, foster technological breakthroughs, and address critical societal challenges through neuromorphic and cyber-physical advancements.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 md:text-3xl mb-6">Mission</h2>

          {/* Loop through messages and display each in a box */}
          <div className="grid grid-cols-1 gap-6">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                className="rounded-lg border bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <p className="text-gray-600 text-lg">{message}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Image with Overlayed Box (1/3 width) */}
        <div className="relative w-full md:w-1/3">
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
              className="rounded-lg object-cover shadow-lg"
            />
          </motion.div>

          {/* Overlayed Box */}
          <div className="absolute inset-0 flex items-center justify-center px-4 md:px-8">
            <motion.div
              className="w-full max-w-md rounded-lg bg-white bg-opacity-90 p-8 text-center shadow-lg md:p-10"
              initial={{ opacity: 0, y: 20 }} // Slide-up animation
              animate={{ opacity: 1, y: 0 }} // Final position
              transition={{ delay: 0.5, duration: 0.6 }} // Delayed transition
            >
              <h3 className="text-xl font-bold text-gray-800 md:text-3xl">
                Vision
              </h3>
              <p className="mt-4 text-sm text-gray-600 md:text-lg leading-relaxed">
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

