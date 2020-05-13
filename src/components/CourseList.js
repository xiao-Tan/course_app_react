import React from "react";
import PropTypes from "prop-types";
import { Link, Prompt } from "react-router-dom";

function CourseList(props) {
  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {props.courses.map((course) => (
            <tr key={course.id}>
              <td>
                <Link to={`/course/${course.title}`}>{course.title}</Link>
              </td>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Prompt when={true} message="Are you sure to leave this page?" />
    </React.Fragment>
  );
}

// CourseList.propTypes = {
//   courses: PropTypes.array.isRequired,
// };

CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CourseList;
