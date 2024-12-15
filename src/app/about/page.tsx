import { coreTech, sensors } from "lib/data";
import React from "react";

const About = () => {
  return (
    <div className="my-16 mx-8 sm:mx-12 md:mx-16 lg:mx-24 xl:mx-32">
      {/* First Heading: Core Tech */}
      <h2 className="mt-36 text-3xl font-semibold text-blue-600 mb-6 text-center md:text-left">Core Tech</h2>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full table-auto border-collapse border border-gray-300 text-left">
          <thead className="bg-blue-200">
            <tr>
              <th className="border-b border-gray-300 px-6 py-3 text-lg font-medium text-gray-700">S. No.</th>
              <th className="border-b border-gray-300 px-6 py-3 text-lg font-medium text-gray-700">Description</th>
              <th className="border-b border-gray-300 px-6 py-3 text-lg font-medium text-gray-700">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {coreTech.map((item, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition duration-200">
                <td className="border-b border-gray-300 px-6 py-4 text-sm text-gray-600">{index + 1}</td>
                <td className="border-b border-gray-300 px-6 py-4 text-sm text-gray-600">{item.description}</td>
                <td className="border-b border-gray-300 px-6 py-4 text-sm text-gray-600">{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Second Heading: Details of Sensors */}
      <h2 className="mt-36 text-3xl font-semibold text-blue-600 mt-12 mb-6 text-center md:text-left">Details of Sensors</h2>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full table-auto border-collapse border border-gray-300 text-left">
          <thead className="bg-blue-200">
            <tr>
              <th className="border-b border-gray-300 px-6 py-3 text-lg font-medium text-gray-700">S. No.</th>
              <th className="border-b border-gray-300 px-6 py-3 text-lg font-medium text-gray-700">Model Name</th>
            </tr>
          </thead>
          <tbody>
            {sensors.map((sensor, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition duration-200">
                <td className="border-b border-gray-300 px-6 py-4 text-sm text-gray-600">{index + 1}</td>
                <td className="border-b border-gray-300 px-6 py-4 text-sm text-gray-600">{sensor.modelName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default About;

