import "./style.css";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { AiFillFolderAdd } from "react-icons/ai";
import Employees from "../employees/Employees";
import { useState } from "react";
import Summary from "../Summary/Summary";
import { Link } from "react-router-dom";

const Divisions = ({ department }) => {
  const { divisions, loading } = useSelector((state) => state.divisions);
  const [division, setDivision] = useState();

  if (loading) return <h1>loading !!!!</h1>;

  const list = divisions
    .filter((div) => div.departmentId === department._id)
    .map((div) => (
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
        onClick={() => setDivision(div)}
      >
        <div className="division">{div.name}</div>
      </ListGroup.Item>
    ));

  return (
    <div className="contaner">
      <div className="divisions">
        <ListGroup as="ol" numbered>
          <div className="divisionsTop">
            <h5 className="text">Divisions</h5>
            <Link to={`/new-division/${department.slug}`}>
              <AiFillFolderAdd size={25} />
            </Link>
          </div>
          {list}
        </ListGroup>
      </div>
      {division !== undefined && (
        <Employees division={division} department={department} />
      )}
      <Summary department={department} />
    </div>
  );
};
export default Divisions;
