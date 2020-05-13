import React, { useState } from "react";
import CourseForm from "./CourseForm";

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  const handleCourseChange = (e) => {
    //{...course} copy the previous object
    //set a property on this object based on the value of this variable.
    const newCourse = { ...course, [e.target.name]: e.target.value };
    setCourse(newCourse);
  };

  return (
    <React.Fragment>
      <h2>Manage Course</h2>
      <CourseForm course={course} onChange={handleCourseChange} />
    </React.Fragment>
  );
};

export default ManageCoursePage;
