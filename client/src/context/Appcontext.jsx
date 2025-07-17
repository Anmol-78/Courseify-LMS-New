import { createContext, useEffect, useState } from "react";
import {dummyCourses} from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const Appcontext = createContext()

export const AppcontextProvider = (props) =>{

    const currency = import.meta.env.VITE_CURRENCY

    const navigate = useNavigate()

    const [allCourses, setAllCourses] = useState([])
     const [isEducator, setIsEducator] = useState(true)

    // fetch all courses
    const fetchAllCoursses = async (params) => {
        setAllCourses(dummyCourses)
    }

    //function to claculate average rating of course
      const calculatRating = (course) =>{
         if(course.courseRatings.length === 0){
            return 0;
         }
         let totalRating = 0;
         course.courseRatings.forEach(rating => {
            totalRating += rating.rating
         })
         return totalRating/ course.courseRatings.length
      } 

      useEffect(()=>{
        fetchAllCoursses();
      },[])

    const value = {
       currency,  allCourses,navigate,calculatRating, isEducator, setIsEducator
    }
    return(
        <Appcontext.Provider value = {value}>
            {props.children}
            </Appcontext.Provider>
    )
}