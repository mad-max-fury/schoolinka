import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="w-full h-fit ">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
