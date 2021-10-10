import { FormCenter } from "../../styles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

// Actions
import { createDivision } from "../../store/actions/divisionAuctions";

const AddDivision = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  let depSlug = useParams().depSlug;

  const { departments, loading } = useSelector((state) => state.departments);

  const dep = departments.find((dep) => dep.slug === depSlug);

  const newDiv = {
    name: "",
    code: "",
    departmentId: dep._id,
  };

  const resetForm = () => {
    setDivision({
      name: "",
      code: "",
      departmentId: depSlug,
    });
  };
  const [division, setDivision] = useState(newDiv);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleChange = (event) => {
    setDivision({ ...division, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createDivision(division, history, setShow));
    resetForm();
  };

  if (loading) return <h1>loading !!!!</h1>;
  return (
    <>
      <FormCenter onSubmit={handleSubmit}>
        <h3> Add Division</h3>
        <br />

        <div className="form-group">
          <label>division Name : </label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={division.neme}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Department Code : </label>
          <input
            className="form-control"
            type="number"
            name="code"
            value={division.code}
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

export default AddDivision;
