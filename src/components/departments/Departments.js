import "./style.css";
import { useState } from "react";
import { Button, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { AiFillFileAdd } from "react-icons/ai";
import { Link } from "react-router-dom";

//components
import Divisions from "../divisions/Divisions";

const Departments = () => {
  const { departments, loading } = useSelector((state) => state.departments);
  const { user, loading2 } = useSelector((state) => state.user);
  const [department, setDepartment] = useState();
  if (loading || loading2) return <h1>loading !!!!</h1>;

  if (user === null) return <h3>Pleas Sign In </h3>;

  const list = departments.map((dep) => (
    <Nav.Item>
      <Nav.Link onClick={() => setDepartment(dep)} eventKey={dep.name}>
        {dep.name}
      </Nav.Link>
    </Nav.Item>
  ));

  return (
    <>
      <div className="tabs">
        <Nav
          variant="tabs"
          defaultActiveKey="disabled"
          style={{ width: "80%" }}
        >
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Departments
            </Nav.Link>
          </Nav.Item>
          {list}
        </Nav>

        <Link to="/new-department">
          <Button variant="primary" style={{ marginRight: "10px" }}>
            <AiFillFileAdd size={20} /> Add New Departmet
          </Button>
        </Link>
      </div>
      {department !== undefined && <Divisions department={department} />}
    </>
  );
};
export default Departments;
