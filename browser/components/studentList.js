import React from 'react';
import StudentRow from './StudentRow';
import SingleStudent from './SingleStudent'

const StudentList = props => {
  const students = props.students;
  const tests = props.tests;
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Tests</th>
        </tr>
        {students.map(student => {
          return <StudentRow key={student.id} student={student} />;
        })}
      </tbody>
    </table>
  );
};

export default StudentList;
