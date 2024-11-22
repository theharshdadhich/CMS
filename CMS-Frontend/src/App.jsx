import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Appointment from "./Pages/Appointment";
import AboutUs from "./Pages/AboutUs";
import Register from "./Pages/Register";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
import { Context } from "./main";
import Login from "./Pages/Login";
// import TestingPage from "./Pages/TestingPage";

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://cms-backend-ss96.onrender.com/api/v1/user/patient/me",
  //         {
  //           withCredentials: true,
  //           headers: { "Content-Type": "application/json" },
  //         }
  //       );
  //       setIsAuthenticated(true);
  //       setUser(response.data.user);
  //     } catch (error) {
  //       console.log(error);
  //       setIsAuthenticated(false);
  //       setUser({});
  //     }
  //   };
  //   fetchUser();
  // }, [isAuthenticated, setIsAuthenticated, setUser]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/v1/user/patient/me",
          {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }
        );
  
        if (!response.ok) {
          console.log(response);
          throw new Error("Network response was not ok");
        }
  
        const data = await response.json();
        setIsAuthenticated(true);
        setUser(data.user);
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false);
        setUser({});
      }
    };
  
    fetchUser();
  }, [isAuthenticated, setIsAuthenticated, setUser]);
  

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* Added for testing */}
          {/* <Route path="/TestingPage" element={<TestingPage/>} /> */}
        </Routes>
        <Footer />
        <ToastContainer position="top-center" />
      </Router>
    </>
  );
};

export default App;
