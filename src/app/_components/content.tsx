import React from "react";
import Image from "next/image";

type ImageType = {
  src: string;
  alt: string;
  caption: string;
};

type GenericSectionProps = {
  heading: string;
  subHeading?: string;
  description: string;
  images: ImageType[]; // Add an images array to props
};

export default function GenericSection({
  heading,
  subHeading,
  description,
  images, // Destructure images
}: GenericSectionProps) {
  return (
    <div className="mt-36 mb-36 flex flex-col md:flex-row mx-20 max-w-full">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl font-medium capitalize mb-11 text-blue-600 text-left">
          {heading}
        </h2>
        {subHeading && (
          <h2 className="text-3xl font-semibold mb-4">{subHeading}</h2>
        )}
        <p className="text-lg text-gray-700">{description}</p>
      </div>

      {/* Right Section (Image Gallery) */}
      <ul className="mx-1 md:w-1/2 grid grid-cols-2 gap-4 ml-4">
        {images.map((image, index) => (
          <li key={index} className="relative">
            <a href="#" className="block">
              <figure className="text-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover rounded-lg"
                />
                <figcaption className="text-sm mt-2 text-gray-600">
                  {image.caption}
                </figcaption>
              </figure>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

