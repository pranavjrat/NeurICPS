import React from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { pamphlets } from "lib/data";

const Application = () => {
  return (
    <div className="mx-36 gap-11">
      {/* Text Section */}
      <div className="mb-8">
        <SectionHeading>Application Verticals</SectionHeading>
        <p className="text-lg text-gray-700">
          Empowering Innovation Across Agriculture, Smart Education, Security,
          Healthcare, and IIoT. These verticals underscore how technology can
          drive sustainable growth, operational efficiency, and societal
          betterment in diverse fields. Each domain benefits from cutting-edge
          research and development, making innovation accessible and impactful.
        </p>
      </div>

      {/* Pamphlet Section */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pamphlets.map((pamphlet, index) => (
          <div
            key={index}
            className="rounded-lg border bg-white p-6 text-center shadow-lg hover:shadow-xl"
          >
            <Image
              src={pamphlet.image}
              alt={pamphlet.title}
              width={80} // Reduced the width
              height={80} // Reduced the height
              className="mb-4 object-contain" // Ensure proper scaling without distortion
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {pamphlet.title}
            </h3>
            <p className="text-gray-600">{pamphlet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Application;
