import { Navigate } from "react-router-dom";
import useAuthAdmin from "../hooks/useAuthAdmin";

export default function AdminRoute({ children }) {
  const isLoggedIn = useAuthAdmin();

  return isLoggedIn ? children : <Navigate to="/admin" />;
}
