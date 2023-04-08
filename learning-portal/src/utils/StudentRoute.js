import { Navigate } from "react-router-dom";
import useAuthStudent from "../hooks/useAuthStudent";

export default function StudentRoute({ children }) {
  const isLoggedIn = useAuthStudent();

  return isLoggedIn ? children : <Navigate to="/" />;
}
