'use client';
import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="mx-32 my-32 scroll-mt-28 mb-28 text-xl">
      {/* Section Heading */}


      <div className="flex flex-col md:flex-row gap-8">

        <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
          <Image
            src="/about1.jpg"
            alt="Description 1"
            width={300}
            height={200}
            className="rounded-md shadow-lg object-cover"
          />
          <Image
            src="/about2.jpg"
            alt="Description 2"
            width={300}
            height={200}
            className="rounded-md shadow-lg object-cover"
          />
          <Image
            src="/about3.jpg"
            alt="Description 3"
            width={300}
            height={200}
            className="rounded-md shadow-lg object-cover"
          />
          <Image
            src="/about4.jpg"
            alt="Description 4"
            width={300}
            height={200}
            className="rounded-md shadow-lg object-cover"
          />
        </div>

        {/* Right Side: Paragraph with Heading and Subheading */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-medium capitalize mb-11 text-blue-600 text-left">
            About Us
          </h2>

          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <h3 className="text-xl font-medium mb-2">What We Believe In</h3>
          <p className="text-lg text-gray-700">
            At our core, we are committed to shaping the future by fostering innovation and inclusivity.
            Our team works tirelessly to bring ideas to life, driving change in the community and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}

