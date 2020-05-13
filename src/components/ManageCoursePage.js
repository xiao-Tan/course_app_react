import React from "react";

const ManageCoursePage = (props) => {
  return (
    <React.Fragment>
      <h2>Manage Course</h2>
      <p>Title: {props.match.params.slug}</p>
    </React.Fragment>
  );
};

export default ManageCoursePage;
