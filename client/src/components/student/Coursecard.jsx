import React, { useContext } from "react";

import { assets } from "../../assets/assets";
import { Appcontext } from "../../context/Appcontext";
import { Link } from "react-router-dom";

const Coursecard = ({ course }) => {
  const { currency, calculatRating } = useContext(Appcontext);

  return (
    <Link
      to={"/course/" + course._id}
      onClick={() => scrollTo(0, 0)}
      className="border border-gray-500/30 pb-6 overflow-hidden rounded-lg"
    >
      <img className="w-full" src={course.courseThumbnail} alt="Thumbnail" />
      <div className="p-3 text-left">
        <h3 className="text-base font-semibold">{course.courseTitle}</h3>
        <p className="text-gray-500">CodeMaster Leo</p>

        <div className="flex items-center space-x-2">
          {/* Course Rating  */}
          <p>{calculatRating(course)}</p>
          <div className="flex ">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={
                  i < Math.floor(calculatRating(course))
                    ? assets.star
                    : assets.star_blank
                }
                alt="rating"
                className="w-3.5 h-3.5"
              />
            ))}
          </div>
          <p className="text-gray-500">{course.courseRatings.length}</p>
        </div>
        <p className="text-base font-semibold text-gray-800">
          {currency}
          {(
            course.coursePrice -
            (course.discount * course.coursePrice) / 100
          ).toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default Coursecard;
