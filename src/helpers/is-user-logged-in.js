import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

export default function IsUserLoggedIn({ user, loggedInPath, children }) {
  return user ? <Navigate to={loggedInPath} replace /> : children;
}

IsUserLoggedIn.propTypes = {
  user: PropTypes.object,
  children: PropTypes.object.isRequired,
  loggedInPath: PropTypes.string.isRequired,
};
