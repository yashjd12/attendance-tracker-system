import React from 'react';

const Students = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Students</h2>
      {/* Placeholder for student list */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="pb-4">Student Name</th>
              <th className="pb-4">% Attendance</th>
              <th className="pb-4">No. of Leaves</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">Student 1</td>
              <td className="py-2">85%</td>
              <td className="py-2">2</td>
            </tr>
            {/* Repeat rows for more students */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
