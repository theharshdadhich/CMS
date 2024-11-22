import { useContext, useState } from "react";
import { TiHome } from "react-icons/ti";
import { RiLogoutBoxFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAddModerator } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleLogout = async () => {
    await axios
      .get("http://localhost:4000/api/v1/user/admin/logout", {
        withCredentials: true,
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

  const gotoHomePage = () => {
    navigateTo("/");
    setShow(!show);
  };
  const gotoDoctorsPage = () => {
    navigateTo("/doctors");
    setShow(!show);
  };
  const gotoMessagesPage = () => {
    navigateTo("/messages");
    setShow(!show);
  };
  const gotoAddNewDoctor = () => {
    navigateTo("/doctor/addnew");
    setShow(!show);
  };
  const gotoAddNewAdmin = () => {
    navigateTo("/admin/addnew");
    setShow(!show);
  };

  return (
    // <div className="bg-gray-100 font-PlusJakarta flex">
    //   <aside
    //     className={`fixed h-screen w-64 bg-sidebar shadow-xl transition-all duration-300 ${
    //       !isAuthenticated ? "hidden" : "block"
    //     } ${show ? "left-0" : "-left-64"} md:left-0`}
    //   >
    //     <div className="p-6">
    //       <a
    //         href="/"
    //         className="text-white items-center text-3xl font-semibold uppercase hover:text-gray-300"
    //       >
    //         Admin
    //       </a>
    //     </div>
    //     <nav className="text-white text-base font-semibold pt-3">
    //       <div className="flex flex-col gap-[30px] items-center">
    //         <a
    //           href=""
    //           onClick={gotoHomePage}
    //           className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
    //         >
    //           <TiHome className="mr-3 text-lg" />
    //           Dashboard
    //         </a>
    //         <a
    //           href="#"
    //           onClick={gotoDoctorsPage}
    //           className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
    //         >
    //           <FaUserDoctor className="mr-3 text-lg" />
    //           Doctors
    //         </a>
    //         <a
    //           href="#"
    //           onClick={gotoAddNewAdmin}
    //           className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
    //         >
    //           <MdAddModerator className="mr-3 text-lg" />
    //           Add New Admin
    //         </a>
    //         <a
    //           href="#"
    //           onClick={gotoAddNewDoctor}
    //           className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
    //         >
    //           <IoPersonAddSharp className="mr-3 text-lg" />
    //           Add New Doctor
    //         </a>
    //         <a
    //           href="#"
    //           onClick={gotoMessagesPage}
    //           className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
    //         >
    //           <AiFillMessage className="mr-3 text-lg" />
    //           Messages
    //         </a>
    //         <a
    //           href="#"
    //           onClick={handleLogout}
    //           className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
    //         >
    //           <RiLogoutBoxFill className="mr-3 text-lg" />
    //           Logout
    //         </a>
    //       </div>
    //     </nav>
    //   </aside>
    //   <div
    //     className={`fixed top-[30px] left-[40px] text-[34px] bg-[#3939d9f2] text-white h-[40px] w-[40px] rounded-lg flex justify-center items-center md:hidden ${
    //       !isAuthenticated ? "hidden" : "flex"
    //     } sm:left-[20px]`}
    //   >
    //     <GiHamburgerMenu className="block" onClick={() => setShow(!show)} />
    //   </div>
    // </div>
    <>
      <nav
        style={!isAuthenticated ? { display: "none" } : { display: "flex" }}
        className={show ? "show sidebar" : "sidebar"}
      >
        <div className="links">
          <a
            href=""
            onClick={gotoHomePage}
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          >
            <TiHome className="mr-3 text-lg" />
            Dashboard
          </a>
          <a
            href="#"
            onClick={gotoDoctorsPage}
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          >
            <FaUserDoctor className="mr-3 text-lg" />
            Doctors
          </a>
          <a
            href="#"
            onClick={gotoAddNewAdmin}
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          >
            <MdAddModerator className="mr-3 text-lg" />
            Add Admin
          </a>
          <a
            href="#"
            onClick={gotoAddNewDoctor}
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          >
            <IoPersonAddSharp className="mr-3 text-lg" />
            Add New Doctor
          </a>
          <a
            href="#"
            onClick={gotoMessagesPage}
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          >
            <AiFillMessage className="mr-3 text-lg" />
            Messages
          </a>
          <a
            href="#"
            onClick={handleLogout}
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          >
            <RiLogoutBoxFill className="mr-3 text-lg" />
            Logout
          </a>
        </div>
      </nav>
      <div
        className="wrapper"
        style={!isAuthenticated ? { display: "none" } : { display: "flex" }}
      >
        <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
      </div>
    </>
  );
};

export default Sidebar;
