const Summary = ({ students }) => {

  const total = students.length;
  const passed = students.filter(s => s.marks >= 40).length;
  const failed = students.filter(s => s.marks < 40).length;

  const average =
    total > 0
      ? (students.reduce((sum, s) => sum + s.marks, 0) / total).toFixed(2)
      : 0;

  return (
    <div>
      <h3>Total: {total}</h3>
      <h3>Passed: {passed}</h3>
      <h3>Failed: {failed}</h3>
      <h3>Average: {average}</h3>
    </div>
  );
};

export default Summary;