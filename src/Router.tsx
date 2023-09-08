import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import DashboardLayout from "./layouts/dashboardLayout";
import NotFound from "./components/NotFound";
import AuthLayout from "./layouts/authLayout";
import SignIn from "./pages/signIn";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
