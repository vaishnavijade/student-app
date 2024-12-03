import React, { useState } from "react";
import axios from "axios";

const AddStudentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    scores: {
      Java: "",
      CPP: "",
      Python: "",
      GenAI: "",
      FSD: "",
    },
  });

  const [message, setMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if the field is a score field
    if (["Java", "CPP", "Python", "GenAI", "FSD"].includes(name)) {
      setFormData({
        ...formData,
        scores: {
          ...formData.scores,
          [name]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/addStudent", formData); // Update with your backend endpoint
      setMessage(response.data.message || "Student added successfully!");
      setFormData({
        name: "",
        rollNo: "",
        scores: {
          Java: "",
          CPP: "",
          Python: "",
          GenAI: "",
          FSD: "",
        },
      });
    } catch (error) {
      setMessage("Failed to add student. Please try again.");
      console.error("Error adding student:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Add Student</h3>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Roll Number:
            <input
              type="text"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              required
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Java:
            <input
              type="number"
              name="Java"
              value={formData.scores.Java}
              onChange={handleChange}
              required
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            CPP:
            <input
              type="number"
              name="CPP"
              value={formData.scores.CPP}
              onChange={handleChange}
              required
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Python:
            <input
              type="number"
              name="Python"
              value={formData.scores.Python}
              onChange={handleChange}
              required
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            GenAI:
            <input
              type="number"
              name="GenAI"
              value={formData.scores.GenAI}
              onChange={handleChange}
              required
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            FSD:
            <input
              type="number"
              name="FSD"
              value={formData.scores.FSD}
              onChange={handleChange}
              required
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudentForm;
