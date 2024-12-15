import { coreTech, sensors } from "lib/data";
import React from "react";

const About = () => {
  return (
    <div className="my-36 mx-36">
      {/* First Heading: Core Tech */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Core Tech</h2>
      <table className="w-full border-collapse border border-gray-300 text-left">
        <thead>
          <tr className="bg-blue-100">
            <th className="border border-gray-300 px-4 py-2">S. No.</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {coreTech.map((item, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{item.description}</td>
              <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Second Heading: Details of Sensors */}
      <h2 className="text-2xl font-semibold text-blue-600 mt-12 mb-4">Details of Sensors</h2>
      <table className="w-full border-collapse border border-gray-300 text-left">
        <thead>
          <tr className="bg-blue-100">
            <th className="border border-gray-300 px-4 py-2">S. No.</th>
            <th className="border border-gray-300 px-4 py-2">Model Name</th>
          </tr>
        </thead>
        <tbody>
          {sensors.map((sensor, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{sensor.modelName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default About;

