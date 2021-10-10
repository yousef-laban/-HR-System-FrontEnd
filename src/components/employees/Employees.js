import { Table } from "react-bootstrap";
import "./style.css";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Employees = ({ division, department }) => {
  const { employees, loading } = useSelector((state) => state.employees);

  if (loading) return <h1>loading !!!!</h1>;

  const list = employees
    .filter((emp) => emp.divisionId === division._id)
    .map((emp, index) => (
      <tr>
        <td>{index + 1}</td>
        <td sizd>{emp._id}</td>
        <td>{emp.name}</td>
        <td>
          {new Date(emp.DateOfBirth).getDate() +
            "/" +
            new Date(emp.DateOfBirth).getMonth() +
            "/" +
            new Date(emp.DateOfBirth).getFullYear()}
        </td>
        <td>{emp.birthPlace}</td>
        <td>
          {new Date(emp.hiringDate).getDate() +
            "/" +
            new Date(emp.hiringDate).getMonth() +
            "/" +
            new Date(emp.hiringDate).getFullYear()}
        </td>
        <td>{emp.salary}</td>
        <td>{emp.bankIBAN}</td>
      </tr>
    ));

  console.log(employees);

  return (
    <div className="employees">
      <div className="divisionsTop">
        <h5 className="text">Employess</h5>
        <h5 className="text">{division.name}</h5>
        <Link to={`/new-employee/${department.slug}/${division.slug}`}>
          <AiOutlineUserAdd size={30} />
        </Link>
      </div>
      <Table responsive="sm" hover bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Employee ID</th>
            <th>Employee name</th>
            <th>Date of Birth</th>
            <th>Birth place</th>
            <th>Hiring Date</th>
            <th>Basic salary</th>
            <th>Bank IBAN</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </Table>
    </div>
  );
};
export default Employees;
