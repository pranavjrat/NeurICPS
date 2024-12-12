import React from 'react';
import SectionHeading from './section-heading';
import Image from 'next/image';
import { pamphlets } from 'lib/data';

const Application = () => {
    return (
    <div className="mx-11 flex flex-col md:flex-row gap-8">
      {/* Text Section */}
      <div className="md:w-1/2 flex flex-col justify-center">
        <SectionHeading>Application Verticals</SectionHeading>
        <p className="text-right mr-16 text-lg text-gray-700">
          Empowering Innovation Across Agriculture, Smart Education, Security, Healthcare, and IIoT.
        </p>
      </div>

      {/* Pamphlet Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:w-1/2">
        {pamphlets.map((pamphlet, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center border hover:shadow-xl"
          >
            <Image
              src={pamphlet.image}
              alt={pamphlet.title}
              width={100}
              height={100}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{pamphlet.title}</h3>
            <p className="text-gray-600">{pamphlet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Application;

