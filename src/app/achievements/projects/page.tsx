import React from "react";
import { projects } from "lib/data";

function ProjectDetails() {
  return (
    <div className="mx-36 my-56">
      <h2 className="mb-8 text-center text-3xl font-semibold text-blue-600 md:text-left">
        Details of Projects
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
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr
                key={index}
                className="transition duration-200 odd:bg-white even:bg-gray-50 hover:bg-gray-100"
              >
                <td className="border-b border-gray-300 px-6 py-4 text-sm text-gray-600">
                  {index + 1}
                </td>
                <td className="border-b border-gray-300 px-6 py-4 text-sm text-gray-600">
                  {project.title}
                </td>
                <td className="border-b border-gray-300 px-6 py-4 text-sm text-gray-600">
                  {project.authors}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectDetails;

