import { Link } from "react-router-dom";
import CButton from "./button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen min-h-screen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-32 h-32 mb-6 text-gray-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM15 12a3 3 0 11-6 0 3 3 0 016 0zM15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
      <h1 className="text-3xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="mt-2 mb-6 text-gray-600">
        The page you are looking for does not exist.
      </p>
      <Link to={"/"}>
        <CButton
          value={"Go back to login"}
          className="p-[14px_23px] flex-row-reverse  text-white hover:bg-secondary text-sm font-semibold bg-secondary-hover rounded-lg"
        />
      </Link>
    </div>
  );
};

export default NotFound;
