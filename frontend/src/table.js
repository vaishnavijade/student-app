import React, { useState, useEffect } from "react";
import axios from "axios";

const Table = () => {
  const [students, setStudents] = useState(null); // Initialize as null
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch student data from the backend
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:4000/data"); // Update URL if needed
        setStudents(response.data); // Set the fetched data
        setLoading(false); // Set loading to false
      } catch (error) {
        console.error("Error fetching student data:", error);
        setStudents([]); // Set to empty array in case of error
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) {
    return <p>Loading students...</p>; // Show loading message while fetching data
  }

  // Show "No students available" message if no data
  if (students && students.length === 0) {
    return <p>No students available.</p>;
  }

  return (
    <div>
      <h3>Students List</h3>
      <table border="1" style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Java</th>
            <th>CPP</th>
            <th>Python</th>
            <th>GenAI</th>
            <th>FSD</th>
          </tr>
        </thead>
        <tbody>
          {students &&
            students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.rollNo}</td>
                <td>{student.scores.Java}</td>
                <td>{student.scores.CPP}</td>
                <td>{student.scores.Python}</td>
                <td>{student.scores.GenAI}</td>
                <td>{student.scores.FSD}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
