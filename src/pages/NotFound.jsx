import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base-200 text-center p-6">
      <h1 className="animate-bounce text-8xl font-bold text-error">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
      <p className="mt-2 text-lg text-gray-500">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className="mt-6 btn btn-primary flex items-center gap-2">
        <FaHome /> Go Home
      </Link>
    </div>
  );
};

export default NotFound;
