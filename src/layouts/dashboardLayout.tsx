import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="w-full h-fit ">
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
