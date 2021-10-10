import "./style.css";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const Summary = ({ department }) => {
  const { employees, loading } = useSelector((state) => state.employees);
  const { divisions, loading2 } = useSelector((state) => state.divisions);

  if (loading || loading2) return <h1>loading !!!!</h1>;

  let sum = 0;
  const list = employees
    .filter((emp) => emp.departmentId === department._id)
    .map((emp) => {
      sum += emp.salary;
    });

  const divisionsList = divisions.filter(
    (div) => div.departmentId === department._id
  );

  return (
    <div className="summary">
      <div className="divisionsTop">
        <h5 className="text">Department Summary</h5>
      </div>
      <Card
        bg="primary"
        style={{ width: "18rem" }}
        className="mb-2"
        text="white"
      >
        <Card.Header>Employees Num.</Card.Header>
        <Card.Body>
          <Card.Text>{list.length} Employees</Card.Text>
        </Card.Body>
      </Card>

      <Card
        bg="primary"
        style={{ width: "18rem" }}
        className="mb-2"
        text="white"
      >
        <Card.Header>Divisions Num.</Card.Header>
        <Card.Body>
          <Card.Text>{divisionsList.length} Divisions</Card.Text>
        </Card.Body>
      </Card>

      <Card
        bg="primary"
        style={{ width: "18rem" }}
        className="mb-2"
        text="white"
      >
        <Card.Header>Salery Sum</Card.Header>
        <Card.Body>
          <Card.Text>{sum} Jod</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Summary;
