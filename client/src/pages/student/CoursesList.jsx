import React, { useContext, useState } from "react";
import { Appcontext } from "../../context/Appcontext";
import SearchBar from "../../components/student/SearchBar";
import { useParams } from "react-router-dom";
import Coursecard from "../../components/student/Coursecard";
import { useEffect } from "react";
import { assets } from "../../assets/assets";
import Footer from "../../components/student/Footer";

const CoursesList = () => {
  // Navigate to Home page
  const { navigate, allCourses } = useContext(Appcontext);
  const { input } = useParams();
  const [filteredCourse, setFilteredCourse] = useState([]);

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice();

      input
        ? setFilteredCourse(
            tempCourses.filter((item) =>
              item.courseTitle.toLowerCase().includes(input.toLowerCase())
            )
          )
        : setFilteredCourse(tempCourses);
    }
  }, [allCourses, input]);

  return (
    <>
      <div className="relative md:px-36 px-8 pt-20 text-left">
        <div className="flex md:flex-row flex-col gap-6 items-start justify-between w-full">
          <div>
            <h1 className="text-4xl font-semibold text-gray-800">
              Course List
            </h1>
            <p className="text-gray-500">
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => navigate("/")}
              >
                Home{" "}
              </span>{" "}
              /<span>Course List </span>{" "}
            </p>
          </div>
          {/* Search Box of the page */}
          <div className="max-w-md w-full border border-gray-200">
            <SearchBar data={input} />
          </div>
        </div>
        {input && (
          <div className="inline-flex items-center gap-4 px-4 py-2 border mt-8 mb-8 text-gray-600">
            <p>{input}</p>
            <img
              src={assets.cross_icon}
              alt=""
              className="cursor-pointer"
              onClick={() => navigate("/course-list")}
            />
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:px-0">
          {filteredCourse.map((course, index) => (
            <Coursecard key={index} course={course} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursesList;
