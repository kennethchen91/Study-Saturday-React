import React from 'react';

const SingleStudent = props => {
  const student = props.student;
  const test = props.test;
  return (
    <tr key = {props.id} >
      <td>{student.fullName}</td>
      <td>Average Grade: {test.grade}</td>
    </tr>
  );
};



export default SingleStudent