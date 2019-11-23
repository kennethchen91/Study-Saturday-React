import React from 'react';

const StudentRow = props => {
  const student = props.student;
  return (
    <tr key = {props.id} >
      <td>{student.fullName}</td>
      <a href="">Details</a> Not a tags. Use onClick to load student data
    </tr>
  );
};

export default StudentRow;