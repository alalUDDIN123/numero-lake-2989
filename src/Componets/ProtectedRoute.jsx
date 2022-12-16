import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  const navigate = useNavigate();

  if (!isAuth) {
    navigate();
  }
  return children;
};
