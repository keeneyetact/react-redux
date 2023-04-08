import { Navigate } from "react-router-dom";
import useAuthRole from "../hooks/useAuthRole";

export default function PublicRoute({ children }) {
  const isAdminOrStudent = useAuthRole();

  return !isAdminOrStudent ? (
    children
  ) : isAdminOrStudent === "admin" ? (
    <Navigate to="/admin/dashboard" />
  ) : (
    <Navigate to="/courses" />
  );
}
