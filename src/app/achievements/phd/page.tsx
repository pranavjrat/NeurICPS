import React from "react";
import Image from "next/image";

type ImageType = {
  src: string;
  alt: string;
  caption: string;
  route: string;
};

type GenericSectionProps = {
  heading: string;
  subHeading?: string;
  description: React.ReactNode;
  images: ImageType[];
};

export default function GenericSection({
  heading,
  subHeading,
  description,
  images,
}: GenericSectionProps) {
  return (
    <div className="drop-shadow-2xl mb-16 mt-28 flex flex-col-reverse items-center gap-12 px-6 md:px-16 md:mx-auto md:max-w-7xl md:flex-row bg-gradient-to-r from-gray-500 to-gray-300 py-16 rounded-lg shadow-lg">
      {/* Right Section (Image Gallery) */}
      <ul className="order-2 grid w-full grid-cols-2 gap-6 md:order-1 md:w-1/2 md:gap-8">
        <h2
          className="mb-6 text-left text-4xl font-semibold capitalize text-white"
          style={{ textShadow: "2px 2px 4px black" }} // Add black shadow here
        >
          {heading}
        </h2>
        {images.map((image, index) => (
          <li key={index} className="relative group">
            <a href={image.route} className="block">
              <figure className="text-center transition-transform duration-300 ease-in-out group-hover:scale-105">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="h-auto w-full rounded-lg object-cover shadow-md transition-shadow duration-300 ease-in-out group-hover:shadow-xl"
                />
                <figcaption
                  className="mt-2 text-lg text-white opacity-80 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                  style={{ textShadow: "2px 2px 2px black" }} // Add black shadow here
                >
                  {image.caption}
                </figcaption>
              </figure>
            </a>
          </li>
        ))}
      </ul>

      {/* Left Section */}
      <div className="order-1 flex w-full flex-col justify-center md:order-2 md:w-1/2">
        {subHeading && (
          <h3
            className="mb-4 text-xl font-semibold text-black md:text-2xl"
          >
            {subHeading}
          </h3>
        )}
        <p
          className="text-base text-gray-950 md:text-lg"
        >
          {description}
        </p>
      </div>
    </div>
  );
}

// Example usage
const phdInfo = {
  heading: "PhD in Neuromorphic Computing for Intelligent Systems (CPIS)",
  subHeading: "Payal Thakur - A Trailblazer in Neuromorphic Research",
  description: (
    <p>
      Payal Thakur's PhD research in the field of Neuromorphic Computing focuses on the development of innovative computational models that simulate the human brain's neural network to improve artificial intelligence systems. Her work on Neuromorphic CPIS (Cognitive and Perceptive Intelligent Systems) aims to enhance the efficiency and learning capabilities of AI through biologically inspired systems, with potential applications in robotics, healthcare, and autonomous vehicles.
      <br />
      The research is groundbreaking in its potential to create more adaptive, intelligent, and energy-efficient systems.
    </p>
  ),
  images: [
    {
      src: "/payal-thakur-photo1.jpg", // Replace with the actual image path
      alt: "Payal Thakur's PhD Research",
      caption: "PhD Research in Neuromorphic Computing",
      route: "/research-details" // Replace with the actual route
    },
    {
      src: "/neuromorphic-model.jpg", // Replace with the actual image path
      alt: "Neuromorphic Model",
      caption: "Neuromorphic Models and AI Systems",
      route: "/neuromorphic-model" // Replace with the actual route
    }
  ]
};


