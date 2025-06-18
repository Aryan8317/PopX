import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <div className=" flex items-center justify-center min-h-screen">
      <div className="bg-white w-full max-w-xs md:max-w-sm px-6 py-10 rounded-lg shadow-lg flex flex-col justify-end h-[90vh]">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Welcome to PopX</h1>
          <p className="text-sm text-gray-500 mt-1">
            Lorem ipsum dolor sit amet,
            </p>
            <p className="text-sm text-gray-500"
            >consectetur adipiscing elit,
          </p>

          <div className="mt-6 space-y-3">
            <Link
              to="/signup"
              className="block text-center w-full py-3 bg-violet-600 text-white rounded-md font-medium hover:bg-purple-700 transition"
            >
              Create Account
            </Link>
            <Link
              to="/login"
              className="block text-center w-full py-3 bg-purple-100 text-purple-700 rounded-md font-medium hover:bg-purple-200 transition"
            >
              Already Registered? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};