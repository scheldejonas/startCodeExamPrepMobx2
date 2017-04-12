import React, { Component } from 'react';
import './App.css';
import info from "./dataModel"

class App extends Component {
 
  render() {
    const studentInfo = info.studentsInfo;
    const headerCount = studentInfo.headers.length;
    const studentCount = studentInfo.students.length;
    console.log('...Data is fetched for table with the course count of: ' + headerCount + ', and also student count: ' + studentCount + '.');
    console.log('...Data Headers is fetched as: ');
    console.log(studentInfo.headers);
    const headerRowMapped = studentInfo.headers.map(function(course, index) {
        return (<th key={course.courseId}>{course.courseName}</th>);
      }
    );
    console.log('...HeaderRowMapped is done preparing and are looking like this:');
    console.log(headerRowMapped);
    const studentCellsMapped = studentInfo.students.map(
      (student, index) => {
        return (
          <tr key={student.studentId}>
            <td>{student.name}</td>
            {student.grades.map((grade, index) => {
              return <td key={index}>{grade.grade}</td>;
            })}
          </tr>
        );
      }
    );
    console.log('...StudentCellsMapped is done preparing and are looking like this:');
    console.log(studentCellsMapped);
    return (
      <div className="App">
        <div className="App-header">
          <h2>React - Exam Preparation Exercise</h2>
        </div>
        <div className="App-intro">
          <h4>The studentsInfo structure contains two lists:</h4>
          <p>One with all the required headers, whis is a total of ({studentInfo.headers.length})</p>
          <p>One with all the Students, whis is a total of ({studentInfo.students.length})</p>
          <p>Use the empty table below, or move it (you must eventually) into a separate component</p>
          <table className="table">
            <thead>
              <tr>
                <th></th>
                {headerRowMapped}
                <th>Average</th>
              </tr>
            </thead>
            <tbody>
              {studentCellsMapped}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
