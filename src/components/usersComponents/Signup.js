import { FormCenter } from "../../styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../store/actions/authActions";
import { useHistory } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

const Signup = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const newUser = {
    username: "",
    password: "",
    email: "",
  };

  const [user, setUser] = useState(newUser);
  const [show, setShow] = useState(false);

  const resetForm = () => {
    setUser({
      username: "",
      password: "",
      email: "",
    });
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(signup(user, history, setShow));

    resetForm();
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <FormCenter onSubmit={handleSubmit}>
        <h3> Creat New User</h3>
        <br />

        <div class="col-auto">
          <label class="sr-only" for="inlineFormInputGroup">
            Username
          </label>
          <div class="input-group ">
            <div class="input-group-prepend">
              <div class="input-group-text">@</div>
            </div>
            <input
              type="text"
              class="form-control"
              id="inlineFormInputGroup"
              placeholder="Username"
              name="username"
              value={user.username}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>password : </label>
          <input
            className="form-control"
            placeholder="Enter the Password"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>E-mail: </label>
          <input
            className="form-control"
            placeholder="Enter the Password"
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <br />
        <button type="submit" className="btn btn-primary" value="Creat">
          Creat
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
          <Modal.Title>Something Went Wrong !</Modal.Title>
        </Modal.Header>
        <Modal.Body>Pleas try again</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Signup;
