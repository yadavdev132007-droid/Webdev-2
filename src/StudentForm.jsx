import { useState } from "react";

const StudentForm = ({ setStudents }) => {
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      id: Date.now(),
      name,
      marks: Number(marks),
    };

    setStudents((prev) => [...prev, newStudent]);

    setName("");
    setMarks("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Marks"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default StudentForm;