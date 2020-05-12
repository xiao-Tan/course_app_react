import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  //we need to tell useEffect when to run or it will run infnit loop;
  //need second argument (dependency array)
  //the dependency array is a list of values that useEffect should watch. It re-runs when values in this array change.
  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []);

  return (
    <div>
      <h2>Courses</h2>
      <CourseList courses={courses} />
    </div>
  );
}

export default CoursesPage;

//>------------------ Above is function component with hook ----------------------------<

//<------------------Below is class component with lifecycle -------------------------->

// import React, { Component } from "react";
// import { getCourses } from "../api/courseApi";

// class CoursesPage extends Component {
//   state = {
//     courses: [],
//   };

//   //when page load
//   componentDidMount() {
//     getCourses().then((courses) => this.setState({ courses: courses }));
//   }

//   render() {
//     return (
//       <div>
//         <h2>Courses</h2>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Author ID</th>
//               <th>Category</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.courses.map((course) => (
//               <tr key={course.id}>
//                 <td>{course.title}</td>
//                 <td>{course.authorId}</td>
//                 <td>{course.category}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// export default CoursesPage;
