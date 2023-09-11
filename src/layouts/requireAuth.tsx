import { Navigate } from "react-router-dom";
import { useUser } from "../lib/reactQuery/auth/useUser";
import React from "react";

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();
  if (!user) return <Navigate to="/" replace />;
  return children;
};

export default RequireAuth;
