import { FormCenter } from "../../styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

// Actions
import { signin } from "../../store/actions/authActions";

const Signin = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const newUser = {
    username: "",
    password: "",
  };

  const resetForm = () => {
    setUser({
      username: "",
      password: "",
    });
  };
  const [user, setUser] = useState(newUser);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(user, history, setShow));
    resetForm();
  };

  return (
    <>
      <FormCenter onSubmit={handleSubmit}>
        <h3> Sign In</h3>
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

        <br />
        <button type="submit" className="btn btn-primary" value="create">
          Sign In
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
          <Modal.Title>Wrong username or password!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You have enterd Wrong username or password, Pleas try again
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Signin;
