import React, { useState } from "react";
import { dummyStudentEnrolled } from "../../assets/assets";
import { useEffect } from "react";
import Loading from "../../components/student/Loading";
const StudentsEnrolled = () => {
  const [enrolledStudents, setEnrolledStudnets] = useState(null);

  const fetchEnrolledStudent = async () => {
    setEnrolledStudnets(dummyStudentEnrolled);
  };

  useEffect(() => {
    fetchEnrolledStudent();
  }, []);

  return enrolledStudents ? (
    <div class="min-h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0 ">
      <div class="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20 ">
        <table class="table-fixed md:table-auto w-full overflow-hidden pb-4 ">
          <thead class="text-gray-900 border-b border-gray-500/20 text-sm text-left-left shadow-sm">
            <tr>
              <th class="px-4 py-3 font-semibold text-center hidden sm:table-cell">
                #
              </th>
              <th class="px-4 py-3 font-semibold">Student Name</th>
              <th class="px-4 py-3 font-semibold">Course Title</th>
              <th class="px-4 py-3 font-semibold hidden sm:table-cell">Date</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-500">
            {enrolledStudents.map((item, index) => (
              <tr key={index} className="border-b border-gray-500/20 ">
                <td className="px-4 py-3 text-center hidden sm:table-cell">
                  {index + 1}
                </td>
                <td className="md:px-4 py-3 px-2 flex items-center space-x-3">
                  <img
                    src={item.student.imageUrl}
                    alt=""
                    className="w-9 h-9 rounded-full"
                  />
                  <span className="truncate">{item.student.name}</span>
                </td>
                <td className="px-4 py-3 truncate">{item.courseTitle}</td>
                <td className="px-4 py-3 hidden sm:table-cell">
                  {new Date(item.purchaseDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default StudentsEnrolled;
