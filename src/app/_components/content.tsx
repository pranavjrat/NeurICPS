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
    <div className="mb-16 mt-28 flex flex-col-reverse items-center gap-12 px-6 md:px-16 md:mx-auto md:max-w-7xl md:flex-row bg-gradient-to-r from-black to-indigo-600 p-8 rounded-lg shadow-lg">
      {/* Right Section (Image Gallery) */}
      <ul className="order-2 grid w-full grid-cols-2 gap-6 md:order-1 md:w-1/2 md:gap-8">
        <h2 className="mb-6 text-left text-3xl font-semibold capitalize text-white">
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
                <figcaption className="mt-2 text-lg text-white opacity-80 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
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
          <h3 className="mb-4 text-xl font-semibold text-white md:text-2xl">
            {subHeading}
          </h3>
        )}
        <p className="text-base text-gray-100 md:text-lg">{description}</p>
      </div>
    </div>
  );
}

