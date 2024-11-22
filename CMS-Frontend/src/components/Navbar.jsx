import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleLogout = async () => {
    await axios
      .get("http://localhost:4000/api/v1/user/patient/logout", {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const navigateTo = useNavigate();

  const goToLogin = () => {
    navigateTo("/login");
  };

  return (
    <div className="fixed top-0 w-full z-30 clearNav bg-gray-200 md:bg-opacity-90 transition duration-300 ease-in-out">
      <div className="flex flex-col max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between p-4">
          <a
            href="/"
            className="text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline"
          >
            <img src="\dadhich.png" alt="logo" className="h-[80px]" />
          </a>
          <div
            className="md:hidden hamburger text-white"
            onClick={() => setShow(!show)}
          >
            <GiHamburgerMenu />
          </div>
        </div>
        <div
          className={`md:flex flex-grow items-center ${
            show ? "flex" : "hidden"
          }`}
        >
          <nav className="flex-col flex-grow bg-gray-200">
            <ul className="flex flex-grow justify-end flex-wrap items-center overflow-hidden">
              <li>
                <Link
                  to="/"
                  onClick={() => setShow(!show)}
                  className="font-medium text-black hover:text-slate-500 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/appointment"
                  onClick={() => setShow(!show)}
                  className="font-medium text-black hover:text-slate-500 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Appointment
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setShow(!show)}
                  className="font-medium text-black hover:text-slate-500 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  About Us
                </Link>
              </li>
              <li>
                {isAuthenticated ? (
                  <button
                    className="inline-flex items-center px-4 py-2 mt-2 font-medium text-gray-100 bg-gray-900 hover:bg-neutral-700 transition duration-500 ease-in-out transform rounded-lg text-md md:mt-0 md:ml-4"
                    onClick={handleLogout}
                  >
                    Sign Out
                  </button>
                ) : (
                  <button
                    className="inline-flex items-center px-4 py-2 mt-2 font-medium text-gray-100 bg-gray-900 hover:bg-neutral-700 transition duration-500 ease-in-out transform rounded-lg text-md md:mt-0 md:ml-4"
                    onClick={goToLogin}
                  >
                    Sign In
                  </button>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
