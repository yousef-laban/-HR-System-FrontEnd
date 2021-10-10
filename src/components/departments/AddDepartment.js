import { FormCenter } from "../../styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

// Actions
import { createDepartment } from "../../store/actions/departmentActions";

const AddDepartment = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const newDep = {
    name: "",
    code: "",
  };

  const resetForm = () => {
    setDepartment({
      name: "",
      code: "",
    });
  };
  const [department, setDepartment] = useState(newDep);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleChange = (event) => {
    setDepartment({ ...department, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createDepartment(department, history, setShow));
    resetForm();
  };

  return (
    <>
      <FormCenter onSubmit={handleSubmit}>
        <h3> Add Department</h3>
        <br />

        <div className="form-group">
          <label>Department Name : </label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={department.neme}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Department Code : </label>
          <input
            className="form-control"
            type="number"
            name="code"
            value={department.code}
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

export default AddDepartment;
