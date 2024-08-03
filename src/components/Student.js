import React, { useEffect, useState } from 'react';
import './Student.css';

export default function Student() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' };
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [students, setStudents] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, address };
    console.log(student);
    fetch('http://localhost:8080/student/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    }).then(() => {
      console.log('New Student added');
    });
  };

  useEffect(() => {
    fetch('http://localhost:8080/student/getAll')
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  }, []);

  return (
    <div className="container">
      <div className="paper" style={paperStyle}>
        <h1 className="title"><u>Add Student</u></h1>
        <form className="form" noValidate autoComplete="off">
          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
          />
          <input
            type="text"
            placeholder="Student Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="input"
          />
          <button onClick={handleClick} className="button">
            Submit
          </button>
        </form>
      </div>
      <h1 className="title">Students</h1>
      <div className="paper" style={paperStyle}>
        {students.map((student) => (
          <div className="student-card" key={student.id}>
            <p>Id: {student.id}</p>
            <p>Name: {student.name}</p>
            <p>Address: {student.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
