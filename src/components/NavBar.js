import { NavB, Logo, FlexStyle } from "../styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/actions/authActions";

const NavBar = (props) => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handelLogout = () => {
    dispatch(logout());
  };

  return (
    <NavB className="navbar navbar-expand-lg navbar-light bg-light">
      <Logo exact to="/">
        <img src="https://www.canton.edu/media/hr.png" alt="logo"></img>
      </Logo>

      <div>
        {user ? (
          <FlexStyle>
            <Link
              to="/departmints"
              style={{ margin: "15px", color: "black", textDecoration: "none" }}
            >
              Department{" "}
            </Link>
            <Link
              style={{ margin: "15px", color: "black", textDecoration: "none" }}
              onClick={handelLogout}
            >
              Logout
            </Link>
          </FlexStyle>
        ) : (
          <>
            <Link
              to="/signin"
              style={{ margin: "15px", color: "black", textDecoration: "none" }}
            >
              Sign In
            </Link>

            <Link
              to="/signup"
              style={{ margin: "15px", color: "black", textDecoration: "none" }}
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </NavB>
  );
};

export default NavBar;
