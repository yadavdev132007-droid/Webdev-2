import { useState } from "react";
import StudentForm from "./StudentForm";
import StudentTable from "./StudentTable";
import Summary from "./Summary";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul", marks: 80 },
    { id: 2, name: "Anita", marks: 35 },
  ]);

  return (
    <div>
      <h1>Student Report Card</h1>

      <StudentForm setStudents={setStudents} />
      <Summary students={students} />
      <StudentTable students={students} setStudents={setStudents} />
    </div>
  );
}

export default App;