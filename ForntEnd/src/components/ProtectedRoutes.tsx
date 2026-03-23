import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import api from "../utils/api";

const ProtectedRoute = () => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    api
      .get("/auth/profile") // cookie automatically sent
      .then(() => setIsAuth(true))
      .catch(() => setIsAuth(false));
  }, []);

  if (isAuth === null) return <div>Loading...</div>;

  if (!isAuth) return <Navigate to="/auth/signin" replace />;

  return <Outlet />;
};

export default ProtectedRoute;