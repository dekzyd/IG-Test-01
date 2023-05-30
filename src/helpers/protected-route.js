import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export default function ProtectedRoute({ user, children }) {
  return !user ? <Navigate to={ROUTES.LOGIN} replace /> : children;
}

ProtectedRoute.propTypes = {
  user: PropTypes.object,
  children: PropTypes.object.isRequired,
};
