import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="sticky top-0 z-50 flex flex-col select-none">
      <marquee className="text-white bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="flex space-x-4 ">
          <h2 className="font-bold md:text-xl">Call Us</h2>
          <a href="tel:+919561526177" className="font-bold md:text-xl">
            +919561526177
          </a>
          <a href="tel:+919561526177" className="font-bold md:text-xl">
            +919561526177
          </a>
        </div>
      </marquee>
      {/* Desktop Navbar */}
      <nav className="sticky top-0 z-50 hidden text-white shadow-md sm:block bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/">
                <img src={logo} alt="logo" width="70%" className="pt-4" />
              </Link>
            </div>
            <div className="flex items-center">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/about" className="ml-4 nav-link">
                About
              </Link>
              <Link to="/contact" className="ml-4 nav-link">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="sticky top-0 z-50 text-white shadow-md sm:hidden bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src={logo} alt="logo" width="90%" className="pt-4" />
            </div>
            <div className="flex items-center">
              <button
                onClick={toggleSidebar}
                className="block text-white focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 overflow-hidden z-50 transition-all duration-700 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-white shadow-md">
          <div className="flex justify-end">
            <button
              onClick={toggleSidebar}
              className="p-2 text-gray-600 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z"
                  fill="#0F0F0F"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
                  fill="#0F0F0F"
                />
              </svg>
            </button>
          </div>
          <div className="px-4 py-8">
            <ul>
              <li>
                <Link
                  to="/"
                  className="block py-2 text-gray-800 hover:text-blue-500"
                  onClick={toggleSidebar}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 text-gray-800 hover:text-blue-500"
                  onClick={toggleSidebar}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 text-gray-800 hover:text-blue-500"
                  onClick={toggleSidebar}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
