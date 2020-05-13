import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []);

  return (
    <div>
      <h2>Courses</h2>
      <Link to="/addCourse" className="btn btn-lg btn-info">
        Create new Course
      </Link>
      <br />
      <CourseList courses={courses} />
    </div>
  );
}

export default CoursesPage;
