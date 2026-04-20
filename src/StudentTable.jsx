const StudentTable = ({ students, setStudents }) => {

  const handleChange = (id, value) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, marks: Number(value) } : s
      )
    );
  };

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Marks</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {students.map((s) => (
          <tr key={s.id}>
            <td>{s.name}</td>
            <td>
              <input
                value={s.marks}
                onChange={(e) => handleChange(s.id, e.target.value)}
              />
            </td>
            <td style={{ color: s.marks >= 40 ? "green" : "red" }}>
              {s.marks >= 40 ? "Pass" : "Fail"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;