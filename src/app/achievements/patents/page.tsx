import React from "react";
import { patents } from "lib/data";

function PatentDetails() {
  return (
    <div className="mx-36 my-56">
      <h2 className="mb-8 text-center text-3xl font-semibold text-blue-600 md:text-left">
        Details of Patents
      </h2>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full table-auto border-collapse border border-gray-300 text-left">
          <thead className="bg-blue-200">
            <tr>
              <th className="border-b border-gray-300 px-6 py-3 text-lg font-medium text-gray-700">
                S. No.
              </th>
              <th className="border-b border-gray-300 px-6 py-3 text-lg font-medium text-gray-700">
                Title
              </th>
              <th className="border-b border-gray-300 px-6 py-3 text-lg font-medium text-gray-700">
                Authors
              </th>
              <th className="border-b border-gray-300 px-6 py-3 text-lg font-medium text-gray-700">
                Patent Number
              </th>
              <th className="border-b border-gray-300 px-6 py-3 text-lg font-medium text-gray-700">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {patents.map((patent, index) => (
              <tr
                key={index}
                className="transition duration-200 odd:bg-white even:bg-gray-50 hover:bg-gray-100"
              >
                <td className="border-b border-gray-300 px-6 py-4 text-sm text-gray-600">
                  {index + 1}
                </td>
                <td className="border-b border-gray-300 px-6 py-4 text-sm text-gray-600">
                  {patent.title}
                </td>
                <td className="border-b border-gray-300 px-6 py-4 text-sm text-gray-600">
                  {patent.authors}
                </td>
                <td className="border-b border-gray-300 px-6 py-4 text-sm text-gray-600">
                  {patent.patent_number}
                </td>
                <td className="border-b border-gray-300 px-6 py-4 text-sm text-gray-600">
                  {patent.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PatentDetails;

