import { FormCenter } from "../../styles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

// Actions
import { createEmployee } from "../../store/actions/employeeActions";

const AddEmployee = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  let { depSlug, divSlug } = useParams();

  const { departments, loading } = useSelector((state) => state.departments);
  const { divisions, loading2 } = useSelector((state) => state.divisions);

  const dep = departments.find((dep) => dep.slug === depSlug);
  const div = divisions.find((div) => div.slug === divSlug);

  const newEmp = {
    name: "",
    DateOfBirth: "",
    birthPlace: "",
    hiringDate: "",
    salary: "",
    bankIBAN: "",
    departmentId: dep._id,
    divisionId: div._id,
  };

  const resetForm = () => {
    setEmployee({
      name: "",
      DateOfBirth: "",
      birthPlace: "",
      hiringDate: "",
      salary: "",
      bankIBAN: "",
      departmentId: dep._id,
      divisionId: div._id,
    });
  };
  const [employee, setEmployee] = useState(newEmp);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleChange = (event) => {
    setEmployee({ ...employee, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createEmployee(employee, history, setShow));
    resetForm();
  };

  if (loading || loading2) return <h1>loading !!!!</h1>;
  return (
    <>
      <FormCenter onSubmit={handleSubmit}>
        <h3> Add Employee</h3>
        <br />

        <div className="form-group">
          <label>Employee Name : </label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={employee.neme}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Hiring Date : </label>
          <input
            className="form-control"
            type="date"
            name="hiringDate"
            value={employee.hiringDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Date Of Birth : </label>
          <input
            className="form-control"
            type="date"
            name="DateOfBirth"
            value={employee.DateOfBirth}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Place Of Birth : </label>
          <input
            className="form-control"
            type="text"
            name="birthPlace"
            value={employee.birthPlace}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Salary : </label>
          <input
            className="form-control"
            type="number"
            name="salary"
            value={employee.salary}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Bank IBAN : </label>
          <input
            className="form-control"
            type="text"
            name="bankIBAN"
            value={employee.bankIBAN}
            onChange={handleChange}
          />
        </div>

        <br />
        <button type="submit" className="btn btn-primary" value="create">
          Add
        </button>
      </FormCenter>

      <Modal
        show={show}
        onHide={handleClose}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Try again</Modal.Title>
        </Modal.Header>
        <Modal.Body>Some Thing Went Wrong, Pleas try again</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddEmployee;
