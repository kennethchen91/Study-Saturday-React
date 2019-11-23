import React from 'react';

const StudentRow = props => {
  const student = props.student;
  return (
    <tr key = {props.id} >
      <td>{student.fullName}</td>
    </tr>
  );
};

export default StudentRow;