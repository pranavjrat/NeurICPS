import React from "react";
import { publications } from "lib/data";

function Publications() {
  return (
    <div className="mx-36 my-56">
      <h2 className="mb-8 text-center text-3xl font-semibold text-blue-600 md:text-left">
        Details of Papers
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
                Year
              </th>
              <th className="border-b border-gray-300 px-6 py-3 text-lg font-medium text-gray-700">
                Journal
              </th>
            </tr>
          </thead>
          <tbody>
            {publications.map((paper, index) => (
              <tr
                key={index}
                className="transition duration-200 odd:bg-white even:bg-gray-50 hover:bg-gray-100"
              >
                <td className="border-b border-gray-300 px-6 py-4 text-sm text-gray-600">
                  {index + 1}
                </td>
                <td className="border-b border-gray-300 px-6 py-4 text-sm text-gray-600">
                  {paper.title}
                </td>
                <td className="border-b border-gray-300 px-6 py-4 text-sm text-gray-600">
                  {paper.authors}
                </td>
                <td className="border-b border-gray-300 px-6 py-4 text-sm text-gray-600">
                  {paper.year}
                </td>
                <td className="border-b border-gray-300 px-6 py-4 text-sm text-gray-600">
                  {paper.journal}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Publications;

