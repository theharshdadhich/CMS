// import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, useNavigate, Navigate } from "react-router-dom";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigateTo = useNavigate();

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios
  //       .post(
  //         "https://cms-backend-ss96.onrender.com/api/v1/user/login",
  //         { email, password, confirmPassword, role: "Patient" },
  //         {
  //           withCredentials: true,
  //           headers: { "Content-Type": "application/json" },
  //         }
  //       )
  //       .then((res) => {
  //         toast.success(res.data.message);
  //         setIsAuthenticated(true);
  //         navigateTo("/");
  //         setEmail("");
  //         setPassword("");
  //         setConfirmPassword("");
  //       });
  //   } catch (error) {
  //     toast.error(error.response.data.message);
  //   }
  // };
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(
        "http://localhost:4000/api/v1/user/login",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            password,
            confirmPassword,
            role: "Patient"
          })
        }
      );
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      toast.success(data.message);
      setIsAuthenticated(true);
      navigateTo("/");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      toast.error(error.message);
    }
  };
  

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    // <>
    //   <div className="container form-component login-form">
    //     <h2>Sign In</h2>
    //     <p>Please Login To Continue</p>
    //     <form onSubmit={handleLogin}>
    //       <input
    //         type="text"
    //         placeholder="Email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //       <input
    //         type="password"
    //         placeholder="Password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //       <input
    //         type="password"
    //         placeholder="Confirm Password"
    //         value={confirmPassword}
    //         onChange={(e) => setConfirmPassword(e.target.value)}
    //       />
    //       <div
    //         style={{
    //           gap: "10px",
    //           justifyContent: "flex-end",
    //           flexDirection: "row",
    //         }}
    //       >
    //         <p style={{ marginBottom: 0 }}>Not Registered?</p>
    //         <Link
    //           to={"/register"}
    //           style={{ textDecoration: "none", color: "#271776ca" }}
    //         >
    //           Register Now
    //         </Link>
    //       </div>
    //       <div style={{ justifyContent: "center", alignItems: "center" }}>
    //         <button type="submit">Login</button>
    //       </div>
    //     </form>
    //   </div>
    // </>


    <>
      <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                Sign in
              </h1>

              <p className="text-gray-500 dark:text-gray-400">
                Sign in to access your account
              </p>
            </div>

            <div className="m-7">
              <form onSubmit={handleLogin}>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>

                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="text-sm text-gray-600 dark:text-gray-400"
                    >
                      Password
                    </label>
                  </div>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="confirm-password"
                      className="text-sm text-gray-600 dark:text-gray-400"
                    >
                      Confirm Password
                    </label>
                  </div>

                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-enter Password"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>

                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                  >
                    Sign in
                  </button>
                </div>
                <p className="text-sm text-center text-gray-400">
                  Don{`'`}t have an account yet?{" "}
                  <Link to={"/register"}>
                    <a className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">
                      Sign up
                    </a>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
