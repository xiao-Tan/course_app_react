import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";

const ManageCoursePage = (props) => {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    const slug = props.match.params.slug; //from the path `/course/:slug`
    console.log(slug);
    if (slug) {
      courseApi.getCourseBySlug(slug).then((_course) => setCourse(_course));
    }
  }, [props.match.params.slug]);

  const handleCourseChange = (e) => {
    //{...course} copy the previous object
    //set a property on this object based on the value of this variable.
    const newCourse = { ...course, [e.target.name]: e.target.value };
    setCourse(newCourse);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formIsValid()) return;
    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course saved.");
    });
  };

  const formIsValid = () => {
    const _errors = {};
    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author ID is required";
    if (!course.category) _errors.category = "Category is required";
    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  };

  return (
    <React.Fragment>
      <h2>Manage Course</h2>
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleCourseChange}
        onSubmit={handleSubmit}
      />
    </React.Fragment>
  );
};

export default ManageCoursePage;
