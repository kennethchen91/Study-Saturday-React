import React from 'react';
import StudentRow from './StudentRow';

const StudentList = props => {
  const students = props.students;

  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
        </tr>
        {students.map(student => {
          return <StudentRow key={student.id} student={student} />;
        })}
      </tbody>
    </table>
  );
};

export default StudentList;
