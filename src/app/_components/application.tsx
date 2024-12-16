import React from 'react';
import Image from 'next/image';
import { pamphlets } from 'lib/data';
import SectionHeading from './section-heading';

const Application = () => {
  return (
    <div className="mx-8 my-36 md:mx-12 lg:mx-16 flex flex-col md:flex-row gap-8 py-12">
      {/* Text Section */}
      <div className="md:w-1/2 flex flex-col justify-center">
        <SectionHeading>Application Verticals</SectionHeading>
        <p className="text-gray-700 text-lg leading-relaxed md:text-left text-left mx-auto max-w-prose">
          Empowering Innovation Across Agriculture, Smart Education, Security, Healthcare, and IIoT. These verticals
          underscore how technology can drive sustainable growth, operational efficiency, and societal betterment in
          diverse fields. Each domain benefits from cutting-edge research and development, making innovation accessible
          and impactful.
        </p>
      </div>

      {/* Pamphlet Section */}
      <ul className="smol-aspect-ratio-gallery smol-flexbox-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:w-1/2">
        {pamphlets.map((pamphlet, index) => (
          <li
            key={index}
            className="rounded-lg border bg-white p-4 sm:p-5 text-center shadow-md transition-shadow duration-300 hover:shadow-lg"
          >
            <div className="mx-auto p-12 ">
              <Image
                src={pamphlet.image}
                alt={pamphlet.title}
                width={400} // Adjusted width for larger screens
                height={400} // Adjusted height for larger screens
                className="mb-4 mx-auto object-cover rounded-md w-full h-auto" // Make the image responsive
              />
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-gray-800">{pamphlet.title}</h3>
            <p className="text-xs sm:text-sm text-gray-600">{pamphlet.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Application;
